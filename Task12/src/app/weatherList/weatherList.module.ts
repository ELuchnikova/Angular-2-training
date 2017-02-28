import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { SharedModule } from './../shared/shared.module';
import { WeatherRoutesModule } from './weatherListRoure.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducer } from './../../reducers';

import { ListComponent } from './list/list.component';
import { WeatherListComponent } from './weatherList.component';
import { WeatherDetailsComponent } from './weatherDetails/weatherDetails.component';
import { PaginationListComponent } from './pagination/pagination.component';
import { CitySearchComponent } from './citySearch/citySearch.component';
import { TableCustomizationComponent } from './tableCustomization/tableCustomization.component';
import { CustomSelectComponent } from './tableCustomization/customSelect/customSelect.component';

import { KelvinToCelsiusPipe } from './../../pipes/kelvinToCelsius';
import { CityWeatherPipe } from './../../pipes/cityWeatherPipe';
import { CapitalizePipe } from './../../pipes/capitalizePipe';
import { KeysPipe } from './../../pipes/keys.pipe';

import { WeatherService } from './../../services/weatherService';
import { LocationService } from './../../services/geolocation';
import { GuardService } from './../../services/guard.service';
import { DefaultRequestOptions } from './../../services/requestOptions.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        MaterialModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        WeatherRoutesModule,
        SharedModule
    ],
    exports: [WeatherListComponent],
    declarations: [
        ListComponent,
        WeatherListComponent,
        WeatherDetailsComponent,
        PaginationListComponent,
        CitySearchComponent,
        TableCustomizationComponent,
        CustomSelectComponent,
        KelvinToCelsiusPipe,
        KeysPipe,
        CityWeatherPipe,
        CapitalizePipe
    ],
    entryComponents: [TableCustomizationComponent],
    providers: [
        WeatherService,
        LocationService,
        GuardService,
        { provide: RequestOptions, useClass: DefaultRequestOptions }
    ]
})
export class WeatherListModule {}