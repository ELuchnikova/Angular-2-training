import { Action } from '@ngrx/store';
import { CustomizationState } from './../states/customization.state';

export const ActionTypes = {
    change: '[customization] change'
};

export class ChangeAction implements Action {
    type = ActionTypes.change;

    constructor(public payload: CustomizationState) {
    }
}


export type Actions
    = ChangeAction;