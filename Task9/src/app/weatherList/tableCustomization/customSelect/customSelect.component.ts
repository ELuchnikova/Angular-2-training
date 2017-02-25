import { Component, Input, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ICustomSelectItems } from './../../../../interfaces';

const CUSTOM_SELECT_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSelectComponent),
    multi: true
};

@Component({
    selector: 'custom-select',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
         <md-select placeholder="Table background" [(ngModel)]="value" name="backgroundColor">
            <md-option *ngFor="let color of colors" [value]="color.value">
              {{color.viewValue}}
            </md-option>
          </md-select>`,
    providers: [CUSTOM_SELECT_ACCESSOR]
})
export class CustomSelectComponent implements ControlValueAccessor {
    @Input() colors: ICustomSelectItems;

    currentValue: any;

    constructor(private ref: ChangeDetectorRef) {}

    set value(newValue) {
        if (newValue) {
            this.currentValue = newValue;
            this.onChange(newValue);
        }
    }

    get value() {
        return this.currentValue;
    }

    onChange = (_: Object) => {};
    onTouched = () => {};

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    writeValue(value: any) {
        if (value !== this.currentValue) {
            this.currentValue = value;
        }
    }
}
