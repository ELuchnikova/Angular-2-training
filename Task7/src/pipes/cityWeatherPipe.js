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
var CityWeatherPipe = (function () {
    function CityWeatherPipe() {
        this.cachedData = {};
    }
    CityWeatherPipe.prototype.transform = function (city) {
        var _this = this;
        if (!this.cachedData[city]) {
            this.cachedData[city] = 'Loading data';
            fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + api_1.WEATHER_API_KEY)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.cachedData[city] = data;
            })
                .catch(function (err) {
                console.warn(err);
                _this.cachedData[city] = err;
            });
        }
        return this.cachedData[city].main ? this.cachedData[city].main.temp + "\u00B0C   " + this.cachedData[city].weather[0].main : this.cachedData[city];
    };
    return CityWeatherPipe;
}());
CityWeatherPipe = __decorate([
    core_1.Pipe({
        name: 'sgCityWeatherPipe',
        pure: false
    }),
    __metadata("design:paramtypes", [])
], CityWeatherPipe);
exports.CityWeatherPipe = CityWeatherPipe;
//# sourceMappingURL=cityWeatherPipe.js.map