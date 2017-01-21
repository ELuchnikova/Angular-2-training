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
var KelvinToCelsiusPipe = (function () {
    function KelvinToCelsiusPipe() {
        this.shift = 273.15;
    }
    KelvinToCelsiusPipe.prototype.transform = function (temperature) {
        return temperature - this.shift;
    };
    return KelvinToCelsiusPipe;
}());
KelvinToCelsiusPipe = __decorate([
    core_1.Pipe({
        name: 'sgKelvinToCelsiusPipe'
    }),
    __metadata("design:paramtypes", [])
], KelvinToCelsiusPipe);
exports.KelvinToCelsiusPipe = KelvinToCelsiusPipe;
//# sourceMappingURL=kelvinToCelsius.js.map