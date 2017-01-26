import { Component, Input, OnChanges, SimpleChanges, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { IDot } from './../../interfaces';

@Component({
    selector: 'google-map',
    template: '<div class="map-container"></div>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: ['.map-container { height: 350px; }']
})
export class MapComponent implements OnChanges {
    @Input() location: IDot;
    private elem: HTMLElement;
    private map: google.maps.Map ;

    constructor(el: ElementRef) {
        this.elem = <HTMLElement>el.nativeElement
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (this.location) {
            this.createMap();
        }
    }

    private createMap(): void {

        this.map = new google.maps.Map(this.elem.children[0], {
            center: this.location,
            zoom: 12
        });
    }
}