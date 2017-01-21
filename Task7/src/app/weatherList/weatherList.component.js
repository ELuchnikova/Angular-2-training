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
var weatherService_1 = require("./../../services/weatherService");
var loggerService_1 = require("./../../services/loggerService");
require("zone.js");
var WeatherListComponent = (function () {
    function WeatherListComponent(ref, logger, weatherService) {
        this.ref = ref;
        this.logger = logger;
        this.weatherService = weatherService;
        this.gotData = new core_1.EventEmitter();
        this.linesCountPerPage = 10;
        this.list = [];
        this.currentPage = 1;
        this.firstLoad = false;
    }
    WeatherListComponent.prototype.ngOnInit = function () {
        this.ref.detach();
        // setInterval(() => {
        //     this.getFullList();
        // }, 10000);
    };
    WeatherListComponent.prototype.ngOnChanges = function (changes) {
        if (this.location) {
            this.getFullList();
        }
    };
    WeatherListComponent.prototype.getFullList = function () {
        var _this = this;
        this.weatherService.requestNearestWeatherData(this.location)
            .then(function (data) {
            _this.resetList(data.list);
            _this.list.forEach(function (item) {
                item.favorite = false;
            });
            if (!_this.firstLoad) {
                _this.firstLoad = true;
                _this.gotData.emit({
                    newState: 'loaded'
                });
            }
        })
            .catch(function (error) {
            console.warn(error);
            _this.gotData.emit({
                newState: 'error'
            });
        });
    };
    WeatherListComponent.prototype.resetList = function (list) {
        if (list === void 0) { list = this.list; }
        this.list = list;
        this.pageCount = Math.ceil(this.list.length / this.linesCountPerPage);
        this.ref.markForCheck();
    };
    WeatherListComponent.prototype.setPage = function ($event) {
        console.log('weatherList set page', $event.newPage);
        this.currentPage = $event.newPage;
    };
    WeatherListComponent.prototype.setFavorite = function ($event) {
        var favoriteItems = this.list.filter(function (item) {
            return item.favorite;
        });
        if (favoriteItems) {
            favoriteItems.forEach(function (item) {
                item.favorite = false;
            });
        }
        var newFavoriteItem = this.list.find(function (item) {
            return item.id === $event;
        });
        newFavoriteItem.favorite = true;
    };
    WeatherListComponent.prototype.unsetFavorite = function ($event) {
        var newUnfavoriteItem = this.list.find(function (item) {
            return item.id === $event;
        });
        newUnfavoriteItem.favorite = false;
    };
    WeatherListComponent.prototype.deleteCity = function ($event) {
        var itemToDelete = this.list.findIndex(function (item) {
            return item.id === $event;
        });
        this.logger.log(this.list[itemToDelete].name + " was deleted");
        this.list.splice(itemToDelete, 1);
        this.resetList();
    };
    WeatherListComponent.prototype.addNewCity = function ($event) {
        var _this = this;
        this.weatherService.getWeatherDataByCity($event)
            .then(function (data) {
            _this.list.unshift(Object.assign({}, data, { favorite: false }));
            _this.resetList();
            _this.logger.log(data.name + " was added");
        });
    };
    return WeatherListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WeatherListComponent.prototype, "location", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WeatherListComponent.prototype, "gotData", void 0);
WeatherListComponent = __decorate([
    core_1.Component({
        selector: 'weather-list',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: "<md-card>\n                    <city-search (addCity)=\"addNewCity($event)\"></city-search>\n                    <div *ngIf=\"list\" class=\"row\">\n                        <div class=\"col-sm-10 col-sm-offset-1\">\n                        <list-table [list]=\"list | slice:(currentPage - 1) * linesCountPerPage : currentPage * linesCountPerPage\" \n                            (setFavorite)=\"setFavorite($event)\" (unsetFavorite)=\"unsetFavorite($event)\" (deleteItem)=\"deleteCity($event)\"></list-table>\n                        <list-pagination [totalCount]=\"pageCount\" [currentPage]=\"currentPage\"\n                            (setPage)=\"setPage($event)\"></list-pagination>\n                        </div>\n                    </div>\n                </md-card>",
        styleUrls: ['./list.css']
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, loggerService_1.LoggerService, weatherService_1.WeatherService])
], WeatherListComponent);
exports.WeatherListComponent = WeatherListComponent;
//# sourceMappingURL=weatherList.component.js.map