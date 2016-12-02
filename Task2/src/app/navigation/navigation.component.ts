import { Component } from '@angular/core';

@Component({
    selector: 'header-navigation',
    template: `<nav class="navbar navbar-inverse">
                    <a class="navbar-brand" href="#">
                    <span class="glyphicon glyphicon-cloud" aria-hidden="true"></span>
                        Weather in nearest places
                    </a>
                </nav>`,
    styleUrls: ['./src/app/navigation/navigation.css']
})
export class NavigationComponent {}