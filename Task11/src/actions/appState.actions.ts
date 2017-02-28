import { Action } from '@ngrx/store';
import { AppStateState } from './../states/appState.state';

export const ActionTypes = {
    change: '[appState] change'
};

export class ChangeAction implements Action {
    type = ActionTypes.change;

    constructor(public payload: AppStateState) {
    }
}


export type Actions
    = ChangeAction;
