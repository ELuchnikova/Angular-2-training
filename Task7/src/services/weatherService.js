/// <reference path="../../node_modules/@types/core-js/index.d.ts" />
/// <reference path="../../node_modules/@types/whatwg-fetch/index.d.ts" />
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
var api_1 = require("./../api");
var data_1 = require("./../data");
var WeatherService = (function () {
    function WeatherService() {
    }
    WeatherService.prototype.requestNearestWeatherData = function (location) {
        if (!this.location || (this.location.lat !== location.lat && this.location.lng !== location.lng)) {
            this.location = location;
        }
        this.dataPromise = this.getWeatherData();
        return this.dataPromise;
    };
    ;
    WeatherService.prototype.getWeatherData = function () {
        var nearestCitiesURL = "http://api.openweathermap.org/data/2.5/find?lat=" + this.location.lat + "&lon=" + this.location.lng + "&cnt=50&APPID=" + api_1.WEATHER_API_KEY;
        return fetch(nearestCitiesURL)
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            console.log('error');
            return data_1.mock;
        });
    };
    WeatherService.prototype.getWeatherDataByCity = function (cityName) {
        return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + api_1.WEATHER_API_KEY)
            .then(function (response) { return response.json(); });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weatherService.js.map