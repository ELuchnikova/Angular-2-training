import { Action } from '@ngrx/store';
import { IWeatherItem, ICityWeather } from './../interfaces';

export const ActionTypes = {
    add: '[list] add',
    resetList: '[list] reset',
    delete: '[list] delete',
};

export class AddAction implements Action {
    type = ActionTypes.add;

    constructor(public payload: ICityWeather) {
    }
}

export class ResetAction implements Action {
    type = ActionTypes.resetList;

    constructor(public payload: Array<IWeatherItem>) {
    }
}

export class DeleteAction implements Action {
    type = ActionTypes.delete;

    constructor(public payload: number) {
    }
}

export type Actions
    = AddAction
    |  ResetAction
    | DeleteAction
    // | IncreaseRemotelyAction
    ;
