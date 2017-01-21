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
var TemperatureColor = (function () {
    function TemperatureColor(el) {
        this.el = el;
    }
    TemperatureColor.prototype.ngOnChanges = function (changes) {
        if (this.temperature !== undefined) {
            this.el.nativeElement.style.backgroundColor = this.getBackgroundColor();
        }
    };
    TemperatureColor.prototype.getBackgroundColor = function () {
        var changedColor;
        var hexValue;
        if (this.temperature > 0) {
            changedColor = Math.round((50 - this.temperature) * 255 / 50);
            hexValue = changedColor.toString(16);
            hexValue = hexValue.length === 2 ? hexValue : '0' + hexValue;
            return '#ffff' + hexValue;
        }
        else {
            changedColor = Math.round((50 - Math.abs(this.temperature)) * 255 / 50);
            hexValue = changedColor.toString(16);
            hexValue = hexValue.length === 2 ? hexValue : '0' + hexValue;
            return '#' + hexValue + 'ffff';
        }
    };
    return TemperatureColor;
}());
__decorate([
    core_1.Input('temperatureColor'),
    __metadata("design:type", Number)
], TemperatureColor.prototype, "temperature", void 0);
TemperatureColor = __decorate([
    core_1.Directive({
        selector: '[temperatureColor]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], TemperatureColor);
exports.TemperatureColor = TemperatureColor;
//# sourceMappingURL=temperatureColor.js.map