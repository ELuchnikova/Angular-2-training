/// <reference path="../../node_modules/@types/node/index.d.ts" />

import './../assets/styles/app-styles.css';

import { Component, OnInit } from '@angular/core';
import { IDot } from './../interfaces';
import { Location } from './map/geolocation';

@Component({
    selector: 'weather-app',
    template: `<header-navigation></header-navigation>
               <app-loader [state]="appState"></app-loader>
               <city-search></city-search>
               <weather-list [location]="locationPromise | async" (gotData)="dataLoaded($event)"></weather-list>
               <google-map [location]="locationPromise | async"></google-map>
               <app-footer></app-footer>`
})
export class AppComponent implements OnInit {
    public locationPromise: Promise<IDot>;
    public appState: string = 'loading';

    public ngOnInit() {
        this.locationPromise = Location.getCurrentLocation();
    }

    public dataLoaded($event: {newState: string}): void {
        this.appState = $event.newState;
    };
}