import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from '@ngrx/store';
import * as CustomizationActions from './../../../actions/customization.actions';
import { InitialState } from './../../../states';
import { CustomizationState } from './../../../states/customization.state';
import { Subscription } from 'rxjs';

import { ICustomSelectItems } from './../../../interfaces';
import { validateCityAmount } from './../../../validators/cityAmount.validator';
import { validateColumnsVisibility } from './../../../validators/columnsVisibility.validator';

@Component({
    selector: 'table-customization',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tableCustomization.html',
    styles: ['form { color: white; width: 335px; }']
})
export class TableCustomizationComponent implements OnInit {
    public formGroup: FormGroup;
    private subscription: Subscription;
    public readonly backgroundColors: ICustomSelectItems = [
        {
            value: 'normal',
            viewValue: 'Normal'
        },
        {
            value: 'lightBlue',
            viewValue: 'Light blue'
        }
    ];

    constructor(
        private ref: ChangeDetectorRef,
        public dialogRef: MdDialogRef<TableCustomizationComponent>,
        private store: Store<InitialState>,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            backgroundColor: 'normal',
            cityAmount: [undefined, [Validators.required, validateCityAmount]],
            tempScale: 'celsius',
            columnsVisibility: this.formBuilder.group({
                cityName: false,
                temperature: false,
                weather: false,
                humidity: false,
                pressure: false,
                wind: false,
                clouds: false,
                favorite: false,
                deleteCity: false
            }, {
                validator: validateColumnsVisibility
            })
        });

        this.subscription = this.store
            .select((s: InitialState) => s.customization)
            .subscribe((data: CustomizationState): void => {
                this.formGroup.setValue(data);
                // this.ref.detectChanges();
                // this.ref.markForCheck();
            });
    }

    public applyChanges(formGroup: FormGroup): void {
        console.log(formGroup);

        if (formGroup.valid) {
            this.store.dispatch(new CustomizationActions.ChangeAction(formGroup.value));
            this.dialogRef.close();
        }
    }
}