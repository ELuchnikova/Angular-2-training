import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<nav class="navbar navbar-inverse">
                    <span class="navbar-text">{{today | date:'longDate'}}</span>
                    <a class="navbar-brand right" href="#">
                        <span class="glyphicon glyphicon-cloud right" aria-hidden="true"></span>
                        Weather in nearest places
                    </a>
                </nav>`,
    styleUrls: ['./footer.css']
})
export class FooterComponent {
    public today: Date;
    constructor() {
        this.today = new Date();
    }
}