import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import * as DetailWeatherActions from './../actions/detailWeather.action';
import { InitialState } from './../states';

import { WeatherService } from './weatherService';

import { ICityWeather } from './../interfaces';

@Injectable()

export class GuardService implements CanActivate{
    constructor(
        private router: Router,
        private weatherService: WeatherService,
        private store: Store<InitialState>,
    ) {}

    public canActivate(route: ActivatedRouteSnapshot) {
        return this.checkCity(route);
    }

    private checkCity(route: ActivatedRouteSnapshot) {

        return this.weatherService.getWeatherDataByCity(route.params['id'])
            .then((data: ICityWeather) => {
                if (data.cod == 404) {
                    this.router.navigate(['/weather']);
                    return false;
                }

                this.store.dispatch(new DetailWeatherActions.ChangeAction(data));

                console.log('guard', data);
                return true;
            })
            .catch(() => {
                this.router.navigate(['/weather']);
                return false;
            });
    }
}