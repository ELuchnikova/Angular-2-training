import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IDot, IWeatherFavoriteItem, IWeatherResponse, ICityWeather } from './../../interfaces';
import { WeatherService } from './../../services/weatherService';
import { LoggerService } from './../../services/loggerService';
import 'zone.js';

@Component({
    selector: 'weather-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<md-card>
                    <city-search (addCity)="addNewCity($event)"></city-search>
                    <div *ngIf="list" class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                        <list-table [list]="list | slice:(currentPage - 1) * linesCountPerPage : currentPage * linesCountPerPage" 
                            (setFavorite)="setFavorite($event)" (unsetFavorite)="unsetFavorite($event)" (deleteItem)="deleteCity($event)"></list-table>
                        <list-pagination [totalCount]="pageCount" [currentPage]="currentPage"
                            (setPage)="setPage($event)"></list-pagination>
                        </div>
                    </div>
                </md-card>`,
    styleUrls: ['./list.css']
})
export class WeatherListComponent implements OnInit, OnChanges {
    @Input() location: IDot;
    @Output() gotData = new EventEmitter();

    public readonly linesCountPerPage: number = 10;
    public list: Array<IWeatherFavoriteItem> = [];
    public pageCount: number;
    public currentPage: number = 1;
    private firstLoad: boolean = false;

    constructor(private ref: ChangeDetectorRef, private logger: LoggerService, private weatherService: WeatherService) {}

    public ngOnInit() {
        this.ref.detach();

        // setInterval(() => {
        //     this.getFullList();
        // }, 10000);
    }

    public ngOnChanges(changes: SimpleChanges) {

        if (this.location) {
            this.getFullList();
        }
    }

    private getFullList(): void {
        this.weatherService.requestNearestWeatherData(this.location)
            .then((data: IWeatherResponse) => {

                this.resetList(<IWeatherFavoriteItem[]>data.list);

                this.list.forEach( (item: IWeatherFavoriteItem) => {
                    item.favorite = false;
                });

                if (!this.firstLoad) {
                    this.firstLoad = true;
                    this.gotData.emit({
                        newState: 'loaded'
                    });
                }
            })
            .catch((error: Error) => {
                console.warn(error);
                this.gotData.emit({
                    newState: 'error'
                });
            });
    }

    private resetList(list: Array<IWeatherFavoriteItem> = this.list) {
        this.list = list;
        this.pageCount = Math.ceil(this.list.length / this.linesCountPerPage);

        this.ref.markForCheck();
    }

    public setPage($event: {newPage: number}): void {
        console.log('weatherList set page', $event.newPage);
        this.currentPage = $event.newPage;
    }

    public setFavorite($event: number): void {
        let favoriteItems: Array<IWeatherFavoriteItem> = this.list.filter((item: IWeatherFavoriteItem) => {
            return item.favorite;
        });

        if (favoriteItems) {
            favoriteItems.forEach((item: IWeatherFavoriteItem) => {
                item.favorite = false;
            });
        }

        let newFavoriteItem: IWeatherFavoriteItem = this.list.find((item: IWeatherFavoriteItem) => {
            return item.id === $event;
        });

        newFavoriteItem.favorite = true;
    }

    public unsetFavorite($event: number): void {
        let newUnfavoriteItem: IWeatherFavoriteItem = this.list.find((item: IWeatherFavoriteItem) => {
            return item.id === $event;
        });

        newUnfavoriteItem.favorite = false;
    }

    public deleteCity($event: number): void {
        let itemToDelete: number = this.list.findIndex((item: IWeatherFavoriteItem) => {
            return item.id === $event;
        });

        this.logger.log(`${this.list[itemToDelete].name} was deleted`);

        this.list.splice(itemToDelete, 1);
        this.resetList();
    }
    
    public addNewCity($event: string): void {
       this.weatherService.getWeatherDataByCity($event)
           .then((data: ICityWeather) => {

               this.list.unshift(Object.assign({}, data, {favorite: false}));
               this.resetList();

               this.logger.log(`${data.name} was added`);
           });
    }
}