import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loader',
    template:  `<div class="loader" *ngIf="state !== 'loaded'">
                    <p *ngIf="state === 'loading'">Loading data...</p>
                    <p *ngIf="state === 'error'">Sorry, some error occurred =(</p>
                </div>`,
    styleUrls: ['./src/app/loader/loader.css']
})
export class LoaderComponent {
    @Input() state: string;

    constructor() {};
}