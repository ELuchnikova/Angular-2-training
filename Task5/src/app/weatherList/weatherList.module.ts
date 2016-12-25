import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { WeatherListComponent } from './weatherList.component';
import { PaginationListComponent } from './pagination/pagination.component';
import { KelvinToCelsiusPipe } from './../../pipes/kelvinToCelsius';
import { CitySearchComponent } from './citySearch/citySearch.component';
import { CityWeatherPipe } from './../../pipes/cityWeatherPipe';
import { CapitalizePipe } from './../../pipes/capitalizePipe';
import { TemperatureColor } from './../../directives/temperatureColor';
import { RotateWind } from './../../directives/rotateWind';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [WeatherListComponent],
    declarations: [
        ListComponent,
        WeatherListComponent, 
        PaginationListComponent,
        KelvinToCelsiusPipe,
        CitySearchComponent,
        CityWeatherPipe,
        CapitalizePipe,
        TemperatureColor,
        RotateWind
    ]
})
export class WeatherListModule {}