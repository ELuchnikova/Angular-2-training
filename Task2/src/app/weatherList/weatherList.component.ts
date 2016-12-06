import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { IDot, IWeatherItem, IWeatherResponse } from './../../interfaces';
import { WeatherListService } from './weather';

@Component({
    selector: 'weather-list',
    template: `<div class="container-fluid">
                    <div *ngIf="pages" class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                        <list-table [list]="pages[currentPage - 1]"></list-table>
                        <list-pagination [totalCount]="pages?.length" [currentPage]="currentPage"
                            (setPage)="setPage($event)"></list-pagination>
                        </div>
                    </div>
                </div>`,
    styleUrls: ['./list.css']
})
export class WeatherListComponent implements OnInit, OnChanges {
    @Input() location: IDot;
    @Output() gotData = new EventEmitter();

    private readonly linesCountPerPage: number = 10;
    private pages: Array<IWeatherItem[]>;
    private currentPage: number = 1;
    private weatherService: WeatherListService;

    public ngOnInit() {
        this.weatherService = new WeatherListService();
    }

    public ngOnChanges() {

        if (this.location) {
            this.weatherService.requestNearestWeatherData(this.location)
                .then((data: IWeatherResponse) => {
                    this.createList(data.list);
                    this.gotData.emit({
                        newState: 'loaded'
                    });
                })
                .catch((error: Error) => {
                    console.warn(error);
                    this.gotData.emit({
                        newState: 'error'
                    });
                });
        }
    }

    private createList(list: Array<IWeatherItem>): void {
        let pageCount: number = Math.ceil(list.length / this.linesCountPerPage);

        for (let i = 1; i <= pageCount; i++) {
            if (!this.pages) {
                this.pages = [list.slice((i - 1) * this.linesCountPerPage , i * this.linesCountPerPage)];
            } else {
                this.pages.push(list.slice((i - 1) * this.linesCountPerPage , i * this.linesCountPerPage));
            }

        }
    }

    private setPage($event: {newPage: number}): void {
        this.currentPage = $event.newPage;
    }
}