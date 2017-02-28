import { Component, Input, OnInit, OnChanges, SimpleChanges, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { IDot } from './../../interfaces';

import { LocationService } from './../../services/geolocation';


@Component({
    selector: 'google-map',
    template: '<div class="map-container"></div>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: ['.map-container { height: 350px; }']
})
export class MapComponent implements OnInit, OnChanges {
    // @Input()
    private location: IDot;
    private elem: HTMLElement;
    private map: google.maps.Map ;

    constructor(
        private locationService: LocationService,
        private el: ElementRef
    ) {
        this.elem = <HTMLElement>el.nativeElement
    }

    public ngOnInit() {
        this.locationService.getCurrentLocation()
            .then((data: IDot) => {
                this.location = data;
                this.createMap();
            });
    }

    public ngOnChanges(changes: SimpleChanges) {
        // if (this.location) {
        //     this.createMap();
        // }
    }

    private createMap(): void {

        this.map = new google.maps.Map(this.elem.children[0], {
            center: this.location,
            zoom: 12
        });
    }
}