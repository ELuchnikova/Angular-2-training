import { Action } from '@ngrx/store';
import * as ListActions from '../actions/list.actions';
import { ListState, initialListState } from '../states/list.state';
import { IWeatherFavoriteItem} from './../interfaces';

export default function (state = initialListState, action: Action): ListState {
    switch (action.type) {
        case ListActions.ActionTypes.add: {
            let newItem: IWeatherFavoriteItem = Object.assign({}, action.payload, {favorite: false});

            return [newItem].concat(state);
        }

        case ListActions.ActionTypes.resetList: {
            let newState: ListState = <ListState>action.payload;

            newState.forEach( (item: IWeatherFavoriteItem) => {
                item.favorite = false;
            });

            return newState;
        }

        case ListActions.ActionTypes.delete: {

            let idToDelete: number = state.findIndex((item: IWeatherFavoriteItem) => {
                return item.id === action.payload;
            });

            let newState = Object.assign([], state);
            newState.splice(idToDelete, 1);

            return newState;
        }
        default:
            return state;
    }
}
