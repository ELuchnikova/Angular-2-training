import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<md-toolbar color="accent" class="footer-toolbar">
                    <span class="navbar-text">{{today | date:'longDate'}}
                         <span *customIf="today.getDate() === 25 && today.getMonth() === 11">&nbsp;&nbsp;&nbsp;Merry Christmas!!!</span>
                    </span>
                    <a class="navbar-brand" href="#">
                       Weather in nearest places&nbsp;&nbsp;
                       <span class="glyphicon glyphicon-cloud right" aria-hidden="true"></span>
                    </a>
                </md-toolbar>`,
    styleUrls: ['./footer.css']
})
export class FooterComponent {
    public today: Date;
    constructor() {
        this.today = new Date();
    }
}