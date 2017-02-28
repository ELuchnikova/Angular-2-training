import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import listReducer from './list.reducer';
import appStateReducer from './appState.reducer';
import customizationReducer from './customization.reducer';
import detailWeatherReducer from './detailWeather.reducer';
import { InitialState } from '../states';

const reducers = {
    list: listReducer,
    appState: appStateReducer,
    customization: customizationReducer,
    detailWeather: detailWeatherReducer
};

const devReducer: ActionReducer<InitialState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
    return devReducer(state, action);
}