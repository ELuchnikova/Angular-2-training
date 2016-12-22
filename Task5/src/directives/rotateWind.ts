import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[rotateWind]'
})
export class RotateWind implements OnChanges {
    @Input('rotateWind') angle:number;

    constructor(private el:ElementRef) {
    }

    ngOnChanges() {
        if (this.angle !== undefined) {

            this.el.nativeElement.style.transform = `rotate(${this.angle}deg)`;
        }
    }
}