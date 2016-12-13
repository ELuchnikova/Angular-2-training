import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { WeatherListComponent } from './weatherList.component';
import { PaginationListComponent } from './pagination/pagination.component';
import { KelvinToCelsiusPipe } from './../../pipes/kelvinToCelsius';

@NgModule({
    imports: [CommonModule],
    exports: [WeatherListComponent],
    declarations: [
        ListComponent,
        WeatherListComponent, 
        PaginationListComponent,
        KelvinToCelsiusPipe
    ]
})
export class WeatherListModule {}