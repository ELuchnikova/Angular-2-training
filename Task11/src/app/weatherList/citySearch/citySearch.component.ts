import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'city-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div class="row">
                  <div class="search-container">
                      <!--<md-input-container>-->
                          <!--<input md-input type="text" placeholder="Enter city name" [(ngModel)]="cityToAdd" (keyup.enter)="pushCity()"/>-->
                      <!--</md-input-container>-->
                      <button md-raised-button value="Add to table" (click)="pushCity()">Add</button>
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