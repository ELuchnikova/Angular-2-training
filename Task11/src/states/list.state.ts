import { IWeatherFavoriteItem } from './../interfaces';

export interface ListState extends Array<IWeatherFavoriteItem> {}

export const initialListState: Array<IWeatherFavoriteItem> = [];