import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'header-navigation',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<nav class="navbar navbar-inverse">
                    <a class="navbar-brand" href="#">
                    <span class="glyphicon glyphicon-cloud" aria-hidden="true"></span>
                        Weather in nearest places
                    </a>
                </nav>`,
    styleUrls: ['./navigation.css']
})
export class NavigationComponent {}