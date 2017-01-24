import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { WeatherListModule } from './weatherList/index';
import { MapModule } from './map/index';

import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule, 
        MaterialModule.forRoot(), 
        CoreModule.forRoot(),
        WeatherListModule, 
        MapModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}