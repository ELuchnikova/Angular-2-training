import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Store } from '@ngrx/store';
import { InitialState } from './../../../states';
import { DetailWeatherState } from './../../../states/detailWeather.state';
import { Subscription } from 'rxjs';

import { WeatherService } from './../../../services/weatherService';
import { ICityWeather } from './../../../interfaces';

@Component({
    template: ` <div>
                    <h3>Details</h3>
                    <div *ngIf="detailData">
                        <p>{{detailData.name}}</p>        
                    </div>
                </div>`
})

export class WeatherDetailsComponent implements OnInit{
    public detailData: ICityWeather;
    private subscription: Subscription;

    constructor(
        private store: Store<InitialState>,
        private route: ActivatedRoute,
        private weatherService: WeatherService
    ) {}

    ngOnInit() {
        this.subscription = this.store
            .select((s: InitialState) => s.detailWeather)
            .subscribe((data: DetailWeatherState): void => {
                this.detailData = data;
            });
    }
}