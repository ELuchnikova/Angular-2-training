import { Action } from '@ngrx/store';
import * as CustomizationActions from '../actions/customization.actions';
import { CustomizationState, initialCustomizationState } from '../states/customization.state';

export default function (state = initialCustomizationState, action: Action): CustomizationState {
    switch (action.type) {
        case CustomizationActions.ActionTypes.change: {
            return Object.assign({}, state, action.payload);
        }

        default:
            return state;
    }
}