import './assets/styles/app-styles.css';

import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule, AppComponent } from './app/index';
import { IWindow } from './interfaces';

platformBrowserDynamic().bootstrapModule(AppModule);


declare var window: IWindow;

function initMap(): void {
    AppComponent.initMap();
};

window.initMap = initMap;