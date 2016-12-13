import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sgKelvinToCelsiusPipe'
})
export class KelvinToCelsiusPipe implements PipeTransform {
    private readonly shift: number = 273.15;

    transform(temperature: number): number {
        return temperature - this.shift;
    }
}