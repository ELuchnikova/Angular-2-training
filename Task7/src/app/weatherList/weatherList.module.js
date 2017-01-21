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
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var shared_module_1 = require("./../shared/shared.module");
var list_component_1 = require("./list/list.component");
var weatherList_component_1 = require("./weatherList.component");
var pagination_component_1 = require("./pagination/pagination.component");
var kelvinToCelsius_1 = require("./../../pipes/kelvinToCelsius");
var citySearch_component_1 = require("./citySearch/citySearch.component");
var cityWeatherPipe_1 = require("./../../pipes/cityWeatherPipe");
var capitalizePipe_1 = require("./../../pipes/capitalizePipe");
var temperatureColor_1 = require("./../../directives/temperatureColor");
var rotateWind_1 = require("./../../directives/rotateWind");
var weatherService_1 = require("./../../services/weatherService");
var WeatherListModule = (function () {
    function WeatherListModule() {
    }
    return WeatherListModule;
}());
WeatherListModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            material_1.MaterialModule,
            shared_module_1.SharedModule
        ],
        exports: [weatherList_component_1.WeatherListComponent],
        declarations: [
            list_component_1.ListComponent,
            weatherList_component_1.WeatherListComponent,
            pagination_component_1.PaginationListComponent,
            kelvinToCelsius_1.KelvinToCelsiusPipe,
            citySearch_component_1.CitySearchComponent,
            cityWeatherPipe_1.CityWeatherPipe,
            capitalizePipe_1.CapitalizePipe,
            temperatureColor_1.TemperatureColor,
            rotateWind_1.RotateWind
        ],
        providers: [weatherService_1.WeatherService]
    }),
    __metadata("design:paramtypes", [])
], WeatherListModule);
exports.WeatherListModule = WeatherListModule;
//# sourceMappingURL=weatherList.module.js.map