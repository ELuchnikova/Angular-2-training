import './assets/styles/app-styles.css';

import {IWindow} from './interfaces';

import {Location} from './map/geolocation';
import {Map} from './map/map';
import {WeatherListController} from './weatherList/weather';

declare var window: IWindow;


let googleMapsPromiceResolve: () => void;

let googleMapsPromice: Promise<string> = new Promise((resolve) => {
    googleMapsPromiceResolve = resolve;
});

Promise.all([Location.getCurrentLocation(), googleMapsPromice])
    .then( ([location]) => {
        new WeatherListController().requestNearestWeatherData(location);
        Map.createMap(location);
    });

function initMap(): void {
    googleMapsPromiceResolve();
};

window.initMap = initMap;