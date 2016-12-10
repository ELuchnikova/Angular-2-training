import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';
import { WeatherListModule } from './weatherList/index';
import { MapModule } from './map/index';
import { FooterComponent } from './footer/footer.component';
import { CitySearchComponent } from './citySearch/citySearch.component';
import { CityWeatherPipe } from './../pipes/cityWeatherPipe';
import { CapitalizePipe } from './../pipes/capitalizePipe';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule, WeatherListModule, MapModule],
    declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        LoaderComponent,
        CitySearchComponent,
        CityWeatherPipe,
        CapitalizePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}