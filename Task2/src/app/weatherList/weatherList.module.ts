import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { WeatherListComponent } from './weatherList.component';
import { PaginationListComponent } from './pagination/pagination.component';

@NgModule({
    imports: [CommonModule],
    exports: [WeatherListComponent],
    declarations: [ListComponent, WeatherListComponent, PaginationListComponent]
})
export class WeatherListModule {}