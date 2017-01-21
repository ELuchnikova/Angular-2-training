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
var LocationService = (function () {
    function LocationService() {
        var _this = this;
        this.geolocationPromise = new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                resolve(_this.currentLocation);
            }, function (error) {
                console.log('location error');
                _this.currentLocation = {
                    lat: 52,
                    lng: 35
                };
                resolve(_this.currentLocation);
            });
        });
    }
    LocationService.prototype.getCurrentLocation = function () {
        return this.geolocationPromise;
    };
    return LocationService;
}());
LocationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=geolocation.js.map