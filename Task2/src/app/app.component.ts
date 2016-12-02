import { Component, ChangeDetectorRef } from '@angular/core';
import { IDot } from './../interfaces';
import { Location } from './map/geolocation';

let googleMapsPromiseResolve: () => void;

@Component({
    selector: 'weather-app',
    template: `<header-navigation></header-navigation>
               <app-loader [state]="appState"></app-loader>
               <weather-list [location]="location" (gotData)="dataLoaded($event)"></weather-list>
               <google-map [location]="location"></google-map>
               <app-footer></app-footer>`
})
export class AppComponent {
    public location: IDot;
    public appState: string = 'loading';
    private static googleMapsPromise: Promise<{}> = new Promise((resolve) => {
        googleMapsPromiseResolve = resolve;
    });

    constructor(private ref: ChangeDetectorRef) {
        Promise.all([Location.getCurrentLocation(), AppComponent.googleMapsPromise])
            .then( ([location]) => {
                this.location = location;
                ref.detectChanges();
            });
    };

    public static initMap(): void {
        googleMapsPromiseResolve();
    };

    public dataLoaded($event: {newState: string}): void {
        this.appState = $event.newState;
    };
}