"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var FooterComponent = (function () {
    function FooterComponent() {
        this.today = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'app-footer',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: "<md-toolbar color=\"accent\" class=\"footer-toolbar\">\n                    <span class=\"navbar-text\">{{today | date:'longDate'}}\n                         <span *customIf=\"today.getDate() === 25 && today.getMonth() === 11\">&nbsp;&nbsp;&nbsp;Merry Christmas!!!</span>\n                    </span>\n                    <a class=\"navbar-brand\" href=\"#\">\n                       Weather in nearest places&nbsp;&nbsp;\n                       <span class=\"glyphicon glyphicon-cloud right\" aria-hidden=\"true\"></span>\n                    </a>\n                </md-toolbar>",
        styleUrls: ['./footer.css']
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map