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
var CitySearchComponent = (function () {
    function CitySearchComponent() {
        this.addCity = new core_1.EventEmitter();
        this.cityToAdd = '';
    }
    CitySearchComponent.prototype.pushCity = function () {
        if (this.cityToAdd) {
            this.addCity.emit(this.cityToAdd);
            this.cityToAdd = '';
        }
    };
    return CitySearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CitySearchComponent.prototype, "addCity", void 0);
CitySearchComponent = __decorate([
    core_1.Component({
        selector: 'city-search',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: "<div class=\"row\">\n                  <div class=\"search-container\">\n                      <md-input-container>\n                          <input md-input type=\"text\" placeholder=\"Enter city name\" [(ngModel)]=\"cityToAdd\" (keyup.enter)=\"pushCity()\">\n                      </md-input-container>\n                      <button md-raised-button value=\"Add to table\" (click)=\"pushCity()\">Add</button>\n                  </div>\n              </div>",
        styleUrls: ['./search.css']
    }),
    __metadata("design:paramtypes", [])
], CitySearchComponent);
exports.CitySearchComponent = CitySearchComponent;
//# sourceMappingURL=citySearch.component.js.map