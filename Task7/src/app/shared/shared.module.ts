import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureColor } from './../../directives/temperatureColor';
import { RotateWind } from './../../directives/rotateWind';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TemperatureColor,
        RotateWind
    ],
    exports: [
        CommonModule,
        TemperatureColor,
        RotateWind
    ]
})
export class SharedModule {}