/// <reference path="../../node_modules/@types/core-js/index.d.ts" />
/// <reference path="../../node_modules/@types/whatwg-fetch/index.d.ts" />

import {WEATHER_API_KEY} from './../api';
import {IDot, IWeatherResponse} from './../interfaces';
import {List} from './list';

export class WeatherListController {

    private location: IDot;

    constructor() {}

    public requestNearestWeatherData(location: IDot): void {
        if (!this.location  || (this.location.lat !== location.lat && this.location.lng !== location.lng)) {
            this.location = location;
            this.getWeatherData();
        }
    };

    private getWeatherData(): void {
        let nearestCitiesURL = `http://api.openweathermap.org/data/2.5/find?lat=${this.location.lat}&lon=${this.location.lng}&cnt=50&units=metric&APPID=${WEATHER_API_KEY}`;

        fetch(nearestCitiesURL)
            .then((response: Response) => response.json())
            .then((data: IWeatherResponse) => {
                new List(data.list);
            })
            .catch((error: Error) => {
                List.showError(error);
            });
    }
}