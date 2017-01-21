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
var common_1 = require("@angular/common");
var geolocation_1 = require("./../../services/geolocation");
// import { DevLoggerService } from './../../services/DevLoggerService';
var loggerService_1 = require("./../../services/loggerService");
function loggerFactory() {
    return process.env.NODE_ENV === 'development'
        ? new loggerService_1.DevLoggerService()
        : new loggerService_1.LoggerService();
}
exports.loggerFactory = loggerFactory;
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                {
                    provide: loggerService_1.LoggerService,
                    useFactory: loggerFactory
                },
                geolocation_1.LocationService
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [],
        exports: [common_1.CommonModule]
    }),
    __metadata("design:paramtypes", [])
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
//# sourceMappingURL=shared.module.js.map