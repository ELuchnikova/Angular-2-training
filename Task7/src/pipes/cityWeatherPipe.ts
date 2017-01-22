import { Pipe, PipeTransform } from '@angular/core';
import { WEATHER_API_KEY } from './../api';
import { ICityWeather } from './../interfaces';

@Pipe({
    name: 'sgCityWeatherPipe',
    pure: false
})
export class CityWeatherPipe  implements PipeTransform {
    private cachedData: Object = {};

    constructor() {}

    transform(city: string): string {

        if (!this.cachedData[city]) {
            this.cachedData[city] = 'Loading data';
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`)
                .then((response: Response) => response.json())
                .then((data: ICityWeather) => {
                    this.cachedData[city] = data;
                })
                .catch(err => {
                    console.warn(err);
                    this.cachedData[city] = err;
                });
        }
        return this.cachedData[city].main ? `${this.cachedData[city].main.temp}°C   ${this.cachedData[city].weather[0].main}` : this.cachedData[city];
    }
}