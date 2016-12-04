import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { IDot, IWeatherItem, IWeatherResponse } from './../../interfaces';
import { WeatherListService } from './weather';

@Component({
    selector: 'weather-list',
    templateUrl: './list.html',
    styleUrls: ['./list.css']
})
export class ListComponent implements OnInit, OnChanges {
    @Input() location: IDot;
    @Output() gotData = new EventEmitter();

    private readonly linesCountPerPage: number = 10;
    private pages: [{
        number: number,
        items: Array<IWeatherItem>
    }];
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
                this.pages = [{
                    number: i,
                    items: list.slice((i - 1) * this.linesCountPerPage , i * this.linesCountPerPage)
                }];
            } else {
                this.pages.push({
                    number: i,
                    items: list.slice((i - 1) * this.linesCountPerPage , i * this.linesCountPerPage)
                });
            }

        }
    }

    private setPage($event: Event, newPage: number): void {
        $event.preventDefault();
        this.currentPage = newPage;
    }

    private nextPage($event: Event): void {
        $event.preventDefault();

        if (this.currentPage !== this.pages.length) {
           this.currentPage++;
        }
    }

    private previousPage($event: Event): void {
        $event.preventDefault();

        if (this.currentPage !== 1) {
            this.currentPage--;
        }
    }
}