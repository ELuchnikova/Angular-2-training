import { ListState } from './list.state';
import { AppStateState } from './appState.state';
import { CustomizationState } from './customization.state';
import { DetailWeatherState } from './detailWeather.state';

export interface InitialState {
    list: ListState,
    appState: AppStateState,
    customization: CustomizationState,
    detailWeather: DetailWeatherState
}
