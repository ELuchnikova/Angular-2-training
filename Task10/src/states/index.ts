import { ListState } from './list.state';
import { AppStateState } from './appState.state';
import { CustomizationState } from './customization.state';

export interface InitialState {
    list: ListState,
    appState: AppStateState,
    customization: CustomizationState
}
