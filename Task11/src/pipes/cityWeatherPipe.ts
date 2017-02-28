import { Pipe, PipeTransform } from '@angular/core';
import { WEATHER_API_KEY } from './../api';
import { ICityWeather } from './../interfaces';
import { Http, Request, Response, URLSearchParams } from '@angular/http';

@Pipe({
    name: 'sgCityWeatherPipe',
    pure: false
})
export class CityWeatherPipe  implements PipeTransform {
    private cachedData: Object = {};

    constructor(private http: Http) {}

    transform(city: string): string {

        if (!this.cachedData[city]) {
            this.cachedData[city] = 'Loading data';

            let params: URLSearchParams = new URLSearchParams();
            params.set('APPID', WEATHER_API_KEY);
            params.set('q', city);
            params.set('units', 'metric');

            let request: Request = new Request({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather',
                search: params,
            });

            // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`)
            this.http.request(request)
                .map((response: Response): ICityWeather => response.json())
                .subscribe((data: ICityWeather): void => {
                    this.cachedData[city] = data;
                });
        }
        return this.cachedData[city].main ? `${this.cachedData[city].main.temp}°C   ${this.cachedData[city].weather[0].main}` : this.cachedData[city];
    }
}