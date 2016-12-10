/// <reference path="../../../node_modules/@types/core-js/index.d.ts" />
/// <reference path="../../../node_modules/@types/whatwg-fetch/index.d.ts" />

import { WEATHER_API_KEY } from './../../api';
import { IDot, IWeatherResponse } from './../../interfaces';

export class WeatherListService {

    private location: IDot;
    private dataPromise: Promise<IWeatherResponse>;

    constructor() {}

    public requestNearestWeatherData(location: IDot): Promise<IWeatherResponse> {
        if (!this.location  || (this.location.lat !== location.lat && this.location.lng !== location.lng)) {
            this.location = location;
            this.dataPromise = this.getWeatherData();
        }
         return this.dataPromise;
    };

    private getWeatherData(): Promise<IWeatherResponse> {
        let nearestCitiesURL = `http://api.openweathermap.org/data/2.5/find?lat=${this.location.lat}&lon=${this.location.lng}&cnt=50&APPID=${WEATHER_API_KEY}`;

        return fetch(nearestCitiesURL)
            .then((response: Response) => response.json());
    }
}