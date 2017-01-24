/// <reference path="../../node_modules/@types/core-js/index.d.ts" />
/// <reference path="../../node_modules/@types/whatwg-fetch/index.d.ts" />

import { Injectable } from '@angular/core';
import { WEATHER_API_KEY } from './../api';
import { IDot, IWeatherResponse, ICityWeather } from './../interfaces';
import { mock } from './../data';

@Injectable()
export class WeatherService {

    private location: IDot;
    private dataPromise: Promise<IWeatherResponse>;

    constructor() {}

    public requestNearestWeatherData(location: IDot): Promise<IWeatherResponse> {
        if (!this.location  || (this.location.lat !== location.lat && this.location.lng !== location.lng)) {
            this.location = location;

        }
        this.dataPromise = this.getWeatherData();
        return this.dataPromise;
    };

    private getWeatherData(): Promise<IWeatherResponse> {
        let nearestCitiesURL = `http://api.openweathermap.org/data/2.5/find?lat=${this.location.lat}&lon=${this.location.lng}&cnt=50&APPID=${WEATHER_API_KEY}`;

        return fetch(nearestCitiesURL)
            .then((response: Response): Promise<IWeatherResponse> => response.json())
            .catch((err: Error) => {
                console.log('error');
                return mock;
            });
    }

    public getWeatherDataByCity(cityName: string): Promise<ICityWeather> {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${WEATHER_API_KEY}`)
            .then((response: Response): Promise<ICityWeather> => response.json());
    }
}