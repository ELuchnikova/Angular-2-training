import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'header-navigation',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<md-toolbar color="primary">
                    <a class="navbar-brand" href="#">
                        <span class="glyphicon glyphicon-cloud" aria-hidden="true"></span>
                        &nbsp;&nbsp;
                        <span>Weather in nearest places</span>
                    </a>
                    <div>
                        <a md-raised-button routerLink="/weather" routerLinkActive="active-route">Weather</a>
                        <a md-raised-button routerLink="/map" routerLinkActive="active-route">Map</a>
                        <a md-raised-button [routerLink]="[{ outlets: { widget: ['widget'] } }]" routerLinkActive="active-route">Weathrer in my city</a>
                    </div>
                </md-toolbar>`,
    styleUrls: ['./navigation.css']
})
export class NavigationComponent {}