/// <reference path="../../node_modules/@types/core-js/index.d.ts" />

import { Injectable } from '@angular/core';
import { Http, Request, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { WEATHER_API_KEY } from './../api';
import { IDot, IWeatherResponse, ICityWeather } from './../interfaces';
import { mock } from './../data';

@Injectable()
export class WeatherService {

    private location: IDot;
    private dataObs: Observable<IWeatherResponse>;

    constructor(private http: Http) {}

    public requestNearestWeatherData(location: IDot): Observable<IWeatherResponse> {
        if (!this.location  || (this.location.lat !== location.lat && this.location.lng !== location.lng)) {
            this.location = location;

        }
        this.dataObs = this.getWeatherData();
        return this.dataObs;
    };

    private getWeatherData(): Observable<IWeatherResponse> {
        let nearestCitiesURL = `http://api.openweathermap.org/data/2.5/find`;

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/html');

        let params: URLSearchParams = new URLSearchParams();
        params.set('APPID', WEATHER_API_KEY);
        params.set('lat', this.location.lat.toString());
        params.set('lon', this.location.lng.toString());

        let request: Request = new Request({
            method: 'GET',
            url: nearestCitiesURL,
            search: params,
            headers
        });
        return this.http.request(request)
            .map((response: Response) => response.json())
            .catch((err: Response) => {
                console.log('error');
                return Observable.of(mock);
            });
    }

    public getWeatherDataByCity(cityName: string): Observable<ICityWeather> {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${WEATHER_API_KEY}`)
            .map((response: Response) => response.json());
    }

    public getWeatherDataByLocation(location: IDot): Observable<ICityWeather> {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}`) //&APPID=${WEATHER_API_KEY}`)
            .map((response: Response) => response.json());
    }
}