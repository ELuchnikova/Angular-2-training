import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocationService } from './../../services/geolocation';
import { WeatherService } from './../../services/weatherService';

import { IDot, ICityWeather } from './../../interfaces';

@Component({
    template: ` <md-card class="widget-component">
                    <div *ngIf="weatherData">
                        <h3>{{weatherData.name}}</h3>
                        <h4>{{weatherData.main.temp}}K</h4>
                        <span [ngSwitch]="weatherData.weather[0].main" class="icon">
                            <i *ngSwitchCase="'Snow'" class="fa fa-snowflake-o" aria-hidden="true"></i>
                            <i *ngSwitchCase="'Clouds'" class="fa fa-cloud" aria-hidden="true"></i>
                            <i *ngSwitchCase="'Rain'" class="fa fa-tint" aria-hidden="true"></i>
                            <i *ngSwitchCase="'Mist'" class="fa fa-eye-slash" aria-hidden="true"></i>
                            <i *ngSwitchCase="'Fog'" class="fa fa-eye-slash" aria-hidden="true"></i>
                            <i *ngSwitchCase="'Clear'" class="fa fa-sun-o" aria-hidden="true"></i>
                        </span>
                    </div>
                    <button md-raised-button (click)="closeWidget()">Close</button>
                </md-card>`,
    styleUrls: ['./widget.css']
})

export class WidgetComponent implements OnInit {
    public weatherData: ICityWeather;

    constructor(
        private router: Router,
        private locationService: LocationService,
        private weatherService: WeatherService
    ) {}

    ngOnInit() {
        this.locationService.getCurrentLocation()
            .then((location: IDot) => {
                this.getData(location);
            })
    }

    private getData(location: IDot) {
        this.weatherService.getWeatherDataByLocation(location)
            .subscribe((data: ICityWeather) => {
                this.weatherData = data;
            });
    }

    public closeWidget() {
        this.router.navigate([{ outlets: { widget: null }}]);
    }
}