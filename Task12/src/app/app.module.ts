import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppRoutesModule } from './appRouter.module';
import { CoreModule } from './core/core.module';
import { WeatherListModule } from './weatherList/index';
import { MapModule } from './map/index';
import { WidgetModule } from './widget/widget.module';

import { AppComponent } from './app.component';

import { PreloadService } from './../services/preload.service';
// import { DefaultRequestOptions } from './../services/requestOptions.service';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        CoreModule.forRoot(),
        WeatherListModule,
        AppRoutesModule,
        MapModule,
        WidgetModule
    ],
    providers: [
        PreloadService,
        // { provide: RequestOptions, useClass: DefaultRequestOptions }
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}