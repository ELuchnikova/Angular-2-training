import { Action } from '@ngrx/store';
import * as DetailWeatherActions from '../actions/detailWeather.action';
import { DetailWeatherState, initialDetailWeatherState } from '../states/detailWeather.state';

export default function (state = initialDetailWeatherState, action: Action): DetailWeatherState | Object {
    switch (action.type) {
        case DetailWeatherActions.ActionTypes.change: {
            return action.payload;
        }

        default:
            return state;
    }
}