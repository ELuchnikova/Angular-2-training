import { ListState } from './list.state';
import { AppStateState } from './appState.state';

export interface InitialState {
    list: ListState,
    appState: AppStateState
}
