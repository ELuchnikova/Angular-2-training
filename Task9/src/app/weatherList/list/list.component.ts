import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IWeatherFavoriteItem, ITableCustomization } from './../../../interfaces';

@Component({
    selector: 'list-table',
    templateUrl: './list.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./list.css']
})
export class ListComponent {

    @Input() list: Array<IWeatherFavoriteItem>;
    @Input() customizationData: ITableCustomization;
    @Input() lightBlueBackground: boolean;
    @Output() setFavorite: EventEmitter<number> = new EventEmitter();
    @Output() unsetFavorite: EventEmitter<number> = new EventEmitter();
    @Output() deleteItem: EventEmitter<number> = new EventEmitter();
    @Output() customize: EventEmitter<boolean> = new EventEmitter();

    public openCustomization() {
        this.customize.emit(true);
    }
}