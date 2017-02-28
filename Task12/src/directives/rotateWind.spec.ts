import {} from 'jasmine';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RotateWind } from './rotateWind';

@Component({
    template: ` <div>
                    <p [rotateWind]="80">W</p>
                </div>`
})
class TestComponent {}

let fixture: ComponentFixture<TestComponent>;
let componentInstance: TestComponent;
let debugEl: DebugElement;
let elem: HTMLElement;

describe('test rotateWind directive', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, RotateWind]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        componentInstance = fixture.componentInstance;
        debugEl = fixture.debugElement.query(By.directive(RotateWind));
    });

    it('check rotation in styles', () => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            elem = debugEl.nativeElement;
            expect(elem.style.transform).toContain('rotate');
            expect(elem.style.transform).toContain('80');

        });
    });
});