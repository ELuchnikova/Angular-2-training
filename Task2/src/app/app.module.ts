import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';
import { ListComponent } from './weatherList/index';
import { MapComponent } from './map/index';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        NavigationComponent,
        ListComponent,
        MapComponent,
        FooterComponent,
        LoaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}