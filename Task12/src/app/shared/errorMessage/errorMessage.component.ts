import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'error-message',
    template: ` <div>
                    <span *ngIf="errors && errorText.length">{{errorText}}</span>
                </div>`,
    styles: ['span {color: #c2185b;}']
})
export class ErrorMessage implements OnChanges{
    @Input() errors: {
        required? : boolean,
        invalidCityAmount? : {
            maxAmount? : number,
            minAmount? : number,
            currentAmount: number
        },
        invalidColumnsVisibility?: boolean
    };

    public errorText: string;

    ngOnChanges() {
        if (this.errors) {
            this.errorText = this.getErrorText();
        }
    }

    private getErrorText() {
        if (this.errors.required) {
            return 'This field cannot be empty';
        }

        if (this.errors.invalidColumnsVisibility) {
            return 'Please select at least one column to show';
        }

        if (this.errors.invalidCityAmount.maxAmount) {
            return `City amount must be less than or equal to 10`;
        }

        if (this.errors.invalidCityAmount.minAmount) {
            return 'City amount must be more than or equal to 3';
        }

        return '';
    }
}