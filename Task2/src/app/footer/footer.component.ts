import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<nav class="navbar navbar-inverse">
                    <a class="navbar-brand right" href="#">
                        <span class="glyphicon glyphicon-cloud right" aria-hidden="true"></span>
                        Weather in nearest places
                    </a>
                </nav>`,
    styleUrls: ['./src/app/footer/footer.css']
})
export class FooterComponent {}