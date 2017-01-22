import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-loader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:  `<div class="loader" *ngIf="state !== 'loaded'">
                    <p *ngIf="state === 'loading'">Loading data...</p>
                    <p *ngIf="state === 'error'">Sorry, some error occurred =(</p>
                </div>`,
    styleUrls: ['./loader.css']
})
export class LoaderComponent {
    @Input() state: string;
}