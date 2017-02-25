import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ListActions from './../../actions/list.actions';
import * as AppStateActions from './../../actions/appState.actions';
import { InitialState } from './../../states';
import { ListState } from './../../states/list.state';
import { CustomizationState } from './../../states/customization.state';
import { Subscription } from 'rxjs';
import { MdDialog } from '@angular/material';

import { IDot, IWeatherFavoriteItem, IWeatherResponse, ICityWeather, ITableCustomization } from './../../interfaces';
import { WeatherService } from './../../services/weatherService';
import { LoggerService } from './../../services/loggerService';
import { LocationService } from './../../services/geolocation';
import { TableCustomizationComponent } from './tableCustomization/tableCustomization.component';
import 'zone.js';

@Component({
    selector: 'weather-list',
    template: `<md-card>
                    <city-search (addCity)="addNewCity($event)"></city-search>
                    <div *ngIf="list" class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                        <list-table [list]="list | slice:(currentPage - 1) * customization.cityAmount : currentPage * customization.cityAmount" 
                            [customizationData]="customization" (customize)="customize()"
                            [lightBlueBackground]="customization.backgroundColor === 'lightBlue'"
                            (setFavorite)="setFavorite($event)" (unsetFavorite)="unsetFavorite($event)"
                            (cityDetails)="cityDetail($event)"
                            (deleteItem)="deleteCity($event)"></list-table>
                        <list-pagination [totalCount]="pageCount" [currentPage]="currentPage"
                            (setPage)="setPage($event)"></list-pagination>
                        </div>
                    </div>
                </md-card>`,
    styleUrls: ['./list.css']
})
export class WeatherListComponent implements OnInit {
    private location: IDot;

    public readonly defaultLinesCountPerPage: number = 10;
    public list: Array<IWeatherFavoriteItem> = [];
    public pageCount: number;
    public currentPage: number = 1;
    private firstLoad: boolean = false;
    public customization: ITableCustomization;

    private listSubscription: Subscription;
    private customizationSubscription: Subscription;

    constructor(
        private router: Router,
        private logger: LoggerService,
        private weatherService: WeatherService,
        private locationService: LocationService,
        private store: Store<InitialState>,
        public dialog: MdDialog
    ) {}

    public ngOnInit() {

        this.listSubscription = this.store
            .select((s: InitialState) => s.list)
            .subscribe((data: ListState): void => {
                this.resetList(data);
            });

        this.customizationSubscription = this.store
            .select((s: InitialState) => s.customization)
            .subscribe((data: CustomizationState): void => {
                this.customization = data;
                console.log('customization data', data);
                this.resetList();
                this.setPage({newPage: 1});
            });

        let promise = this.locationService.getCurrentLocation();

        console.log('promise', promise);

        // this.locationService.getCurrentLocation()
        promise
            .then((data: IDot) => {
                console.log('promise then', data);
                this.location = data;
                this.getFullList();
            });
    }

    private getFullList(): void {
        this.weatherService.requestNearestWeatherData(this.location)
            .then((data: IWeatherResponse) => {

                this.store.dispatch(new ListActions.ResetAction(data.list));

                if (!this.firstLoad) {
                    this.firstLoad = true;

                    this.store.dispatch(new AppStateActions.ChangeAction('loaded'));
                }
            })
            .catch((error: Error) => {
                console.warn(error);
                this.store.dispatch(new AppStateActions.ChangeAction('error'));
            });
    }

    private resetList(list: Array<IWeatherFavoriteItem> = this.list) {
        this.list = list;
        this.pageCount = Math.ceil(this.list.length / (this.customization ? this.customization.cityAmount : this.defaultLinesCountPerPage));
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
        this.store.dispatch(new ListActions.DeleteAction($event));
    }
    
    public addNewCity($event: string): void {
       this.weatherService.getWeatherDataByCity($event)
           .then((data: ICityWeather) => {
               this.store.dispatch(new ListActions.AddAction(data));

               this.logger.log(`${data.name} was added`);
           });
    }

    public customize() {
        let dialogRef = this.dialog.open(TableCustomizationComponent);
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log(result);
        });
    }

    public cityDetail($event: string) {
        this.router.navigate(['/weatherDetails', $event]);
    }
}