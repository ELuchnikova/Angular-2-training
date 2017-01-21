/// <reference path="../../node_modules/@types/node/index.d.ts" />
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
require("./../assets/styles/app-styles.css");
var core_1 = require("@angular/core");
var geolocation_1 = require("./../services/geolocation");
var AppComponent = (function () {
    function AppComponent(zone, locationService) {
        this.zone = zone;
        this.locationService = locationService;
        this.appState = 'loading';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.locationPromise = this.locationService.getCurrentLocation();
        var timer = performance ?
            performance.now.bind(performance) :
            Date.now.bind(Date);
        var time = 0;
        var startTime;
        var getTime = function () {
            return Math.floor(time * 100) / 100 + 'ms';
        };
        this.zone.onUnstable
            .subscribe(function (data) {
            time = 0;
            startTime = timer();
        });
        this.zone.onStable
            .subscribe(function (data) {
            time += timer() - startTime;
            console.log('checking took ', getTime(), ' of CPU time');
        });
    };
    AppComponent.prototype.dataLoaded = function ($event) {
        this.appState = $event.newState;
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'weather-app',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: "<header-navigation></header-navigation>\n               <app-loader [state]=\"appState\"></app-loader>\n               <weather-list [location]=\"locationPromise | async\" (gotData)=\"dataLoaded($event)\"></weather-list>\n               <google-map [location]=\"locationPromise | async\"></google-map>\n               <app-footer></app-footer>"
    }),
    __metadata("design:paramtypes", [core_1.NgZone, geolocation_1.LocationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map