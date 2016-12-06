import { Component, Input } from '@angular/core';
import { IWeatherItem } from './../../../interfaces';

@Component({
    selector: 'list-table',
    templateUrl: './list.html'
})
export class ListComponent {
    @Input() list: Array<IWeatherItem>;
}