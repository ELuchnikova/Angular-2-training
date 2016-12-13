import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { IDot, IWeatherItem, IWeatherResponse } from './../../interfaces';
import { WeatherListService } from './weather';

@Component({
    selector: 'weather-list',
    template: `<div class="container-fluid">
                    <div *ngIf="list" class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                        <list-table [list]="list | slice:(currentPage - 1) * linesCountPerPage : currentPage * linesCountPerPage"></list-table>
                        <list-pagination [totalCount]="pageCount" [currentPage]="currentPage"
                            (setPage)="setPage($event)"></list-pagination>
                        </div>
                    </div>
                </div>`,
    styleUrls: ['./list.css']
})
export class WeatherListComponent implements OnInit, OnChanges {
    @Input() location: IDot;
    @Output() gotData = new EventEmitter();

    public readonly linesCountPerPage: number = 10;
    public list: Array<IWeatherItem> = [];
    public pageCount: number;
    public currentPage: number = 1;
    private weatherService: WeatherListService;

    public ngOnInit() {
        this.weatherService = new WeatherListService();
    }

    public ngOnChanges() {

        if (this.location) {
            this.weatherService.requestNearestWeatherData(this.location)
                .then((data: IWeatherResponse) => {
                    // this.createList(data.list);
                    this.list = data.list;
                    this.pageCount = Math.ceil(this.list.length / this.linesCountPerPage);
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

    public setPage($event: {newPage: number}): void {
        this.currentPage = $event.newPage;
    }
}