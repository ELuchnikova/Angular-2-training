/// <reference path="../../node_modules/@types/node/index.d.ts" />

import './../assets/styles/app-styles.css';

import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { IDot } from './../interfaces';
import { Location } from './map/geolocation';

@Component({
    selector: 'weather-app',
    template: `<header-navigation></header-navigation>
               <app-loader [state]="appState"></app-loader>
               <weather-list [location]="location" (gotData)="dataLoaded($event)"></weather-list>
               <google-map [location]="location"></google-map>
               <app-footer></app-footer>`
})
export class AppComponent implements OnInit {
    public location: IDot;
    public appState: string = 'loading';
    private changeDetectorRef: ChangeDetectorRef;

    constructor(private ref: ChangeDetectorRef) {
        this.changeDetectorRef = ref;
    };

    public ngOnInit(){
        Location.getCurrentLocation()
            .then( (location) => {
                this.location = location;
                this.changeDetectorRef.detectChanges();
            });
    }

    public dataLoaded($event: {newState: string}): void {
        this.appState = $event.newState;
    };
}