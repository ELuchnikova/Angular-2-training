import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IWeatherFavoriteItem } from './../../../interfaces';

@Component({
    selector: 'list-table',
    templateUrl: './list.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
    @Input() list: Array<IWeatherFavoriteItem>;
    @Output() setFavorite: EventEmitter<number> = new EventEmitter();
    @Output() unsetFavorite: EventEmitter<number> = new EventEmitter();
    @Output() deleteItem: EventEmitter<number> = new EventEmitter();
}