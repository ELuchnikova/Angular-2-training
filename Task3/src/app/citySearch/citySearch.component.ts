import { Component } from '@angular/core';

@Component({
    selector: 'city-search',
    template: `<div>
                    <div class="row">
                        <div class="search-container">
                            <input type="text" placeholder="Enter city name" [(ngModel)]="cityToAdd" (keyup.enter)="addCity(cityToAdd)">
                            <button value="Add to table" (click)="addCity(cityToAdd)" class="btn btn-default">Add</button>
                        </div>
                    </div>
                    <div class="col-sm-6 col-sm-offset-3">
                        <table class="table table-stripes" *ngIf="cities.length">
                            <thead>
                                <tr><th>City</th><th>Weather</th></tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let city of cities">
                                    <td>{{city | sgCapitalizePipe}}</td>
                                    <td>{{city | sgCityWeatherPipe}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`,
    styleUrls: ['./search.css']
})
export class CitySearchComponent {
    public cityToAdd: string = '';
    public cities: Array<string> = [];

    addCity(): void {
        if (this.cityToAdd) {
            this.cities.push(this.cityToAdd);
            this.cityToAdd = '';
        }
    }
}