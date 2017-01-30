import { Action } from '@ngrx/store';
import * as AppStateActions from '../actions/appState.actions';
import { AppStateState, initialAppStateState } from '../states/appState.state';

export default function (state = initialAppStateState, action: Action): AppStateState {
    switch (action.type) {
        case AppStateActions.ActionTypes.change: {
            return action.payload;
        }

        default:
            return state;
    }
}