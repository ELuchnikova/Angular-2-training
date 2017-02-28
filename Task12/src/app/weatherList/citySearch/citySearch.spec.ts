import {} from 'jasmine';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CitySearchComponent } from './citySearch.component';


let citySearchFixture: ComponentFixture<CitySearchComponent>;
let componentInstance: CitySearchComponent;
let debugEl: DebugElement;
let elem: HTMLElement;

describe('test citySearch component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, MaterialModule],
            declarations: [CitySearchComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        citySearchFixture = TestBed.createComponent(CitySearchComponent);
        componentInstance = citySearchFixture.componentInstance;
    });

    it('check initial value of cityToAdd', () => {
        debugEl = citySearchFixture.debugElement.query(By.css('input'));
        citySearchFixture.detectChanges();
        elem = debugEl.nativeElement;
        expect(elem['value']).toBe('');
    });

    it('check emitting search', () => {

        citySearchFixture = TestBed.createComponent(CitySearchComponent);
        componentInstance = citySearchFixture.componentInstance;

        componentInstance.cityToAdd = 'My';

        let pushedCity: string;
        debugEl = citySearchFixture.debugElement.query(By.css('button'));

        componentInstance.addCity.subscribe((cityToAdd: string) => {
            pushedCity = cityToAdd;
        });

        debugEl.triggerEventHandler('click', null);
        expect(pushedCity).toBe('My');
    });
});