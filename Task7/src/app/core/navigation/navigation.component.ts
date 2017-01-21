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
                </md-toolbar>`,
    styleUrls: ['./navigation.css']
})
export class NavigationComponent {}