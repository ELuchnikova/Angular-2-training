/// <reference path="../../node_modules/@types/node/index.d.ts" />

import './../assets/styles/app-styles.css';

import { Component, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';

import { Store } from '@ngrx/store';
import { InitialState } from './../states';
import { AppStateState } from './../states/appState.state';
import { Subscription } from 'rxjs';

import { IDot } from './../interfaces';
// import { LocationService } from './../services/geolocation';

@Component({
    selector: 'weather-app',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<header-navigation></header-navigation>
               <app-loader [state]="appState"></app-loader>
               <router-outlet></router-outlet>
               <router-outlet name="widget"></router-outlet>
               <app-footer></app-footer>`
})
export class AppComponent implements OnInit {
    // public locationPromise: Promise<IDot>;
    public appState: string = 'loading';

    private subscription: Subscription;

    constructor(
        private zone: NgZone,
        // private locationService: LocationService,
        private store: Store<InitialState>
    ) {}

    public ngOnInit() {
        // this.locationPromise = this.locationService.getCurrentLocation();

        this.subscription = this.store
            .select((s: InitialState) => s.appState)
            .subscribe((data: AppStateState): void => {
                console.log('app state data', data);

                this.appState = data;
            });


        let timer = performance ?
                performance.now.bind(performance) :
                Date.now.bind(Date);
        let time: number = 0;
        let startTime: number;
        let getTime = (): string => {
            return Math.floor(time * 100) / 100 + 'ms';
        };

        // this.zone.onUnstable
        //     .subscribe((data: void) => {
        //         time = 0;
        //         startTime = timer();
        //     });
        // this.zone.onStable
        //     .subscribe((data: void) => {
        //         time += timer() - startTime;
        //         console.log('checking took ', getTime(), ' of CPU time');
        //     });
    }
}