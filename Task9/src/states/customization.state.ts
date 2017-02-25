import { ITableCustomization } from './../interfaces';

export interface CustomizationState extends ITableCustomization {};

export const initialCustomizationState: CustomizationState = {
    backgroundColor: 'normal',
    cityAmount: 10,
    tempScale: 'celsius',
    columnsVisibility: {
        cityName: true,
        temperature: true,
        weather: true,
        humidity: true,
        pressure: true,
        wind: true,
        clouds: true,
        favorite: true,
        deleteCity: true
    }
};