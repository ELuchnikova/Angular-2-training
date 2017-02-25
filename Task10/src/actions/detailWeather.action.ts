import { Action } from '@ngrx/store';
import { DetailWeatherState } from './../states/detailWeather.state';

export const ActionTypes = {
    change: '[detailWeather] change'
};

export class ChangeAction implements Action {
    type = ActionTypes.change;

    constructor(public payload: DetailWeatherState) {
    }
}

export type Actions
    = ChangeAction;