import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';
import { WeatherListModule } from './weatherList/index';
import { MapModule } from './map/index';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [BrowserModule, WeatherListModule, MapModule],
    declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        LoaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}