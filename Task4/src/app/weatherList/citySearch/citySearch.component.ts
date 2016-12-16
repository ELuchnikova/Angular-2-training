import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'city-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div class="row">
                  <div class="search-container">
                      <input type="text" placeholder="Enter city name" [(ngModel)]="cityToAdd" (keyup.enter)="pushCity(cityToAdd)">
                      <button value="Add to table" (click)="pushCity(cityToAdd)" class="btn btn-default">Add</button>
                  </div>
              </div>`,
    styleUrls: ['./search.css']
})
export class CitySearchComponent {
    @Output() addCity: EventEmitter<string> = new EventEmitter();
    public cityToAdd: string = '';

    public pushCity(): void {
        if (this.cityToAdd) {
            this.addCity.emit(this.cityToAdd);
            this.cityToAdd = '';
        }
    }
}