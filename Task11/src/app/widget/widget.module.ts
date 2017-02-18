import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { WidgetComponent } from './widget.component';

import { LocationService } from './../../services/geolocation';
import { WeatherService } from './../../services/weatherService';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [WidgetComponent],
    providers: [LocationService, WeatherService],
    exports: [CommonModule, WidgetComponent]
})

export class WidgetModule {}