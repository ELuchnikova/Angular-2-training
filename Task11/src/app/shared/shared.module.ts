import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessage } from './errorMessage/errorMessage.component';
import { TemperatureColor } from './../../directives/temperatureColor';
import { RotateWind } from './../../directives/rotateWind';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ErrorMessage,
        TemperatureColor,
        RotateWind
    ],
    exports: [
        CommonModule,
        ErrorMessage,
        TemperatureColor,
        RotateWind
    ]
})
export class SharedModule {}