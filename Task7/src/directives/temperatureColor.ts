import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[temperatureColor]'
})
export class TemperatureColor implements OnChanges{
    @Input('temperatureColor') temperature: number;

    constructor(private el: ElementRef) {}

    ngOnChanges(changes: SimpleChanges) {
        if (this.temperature !== undefined) {
            this.el.nativeElement.style.backgroundColor = this.getBackgroundColor();
        }
    }

    private getBackgroundColor(): string {
        let changedColor: number;
        let hexValue: string;
        if (this.temperature > 0) {
            changedColor = Math.round((50 - this.temperature) * 255 / 50);
            hexValue = changedColor.toString(16);
            hexValue = hexValue.length === 2 ? hexValue : '0' + hexValue;
            return '#ffff' + hexValue;
        } else {
            changedColor = Math.round((50 - Math.abs(this.temperature)) * 255 / 50);
            hexValue = changedColor.toString(16);
            hexValue = hexValue.length === 2 ? hexValue : '0' + hexValue;
            return '#' + hexValue + 'ffff';
        }
    }
}