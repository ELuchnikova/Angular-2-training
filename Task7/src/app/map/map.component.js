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
var MapComponent = (function () {
    function MapComponent(el) {
        this.elem = el.nativeElement;
    }
    MapComponent.prototype.ngOnChanges = function (changes) {
        if (this.location) {
            this.createMap();
        }
    };
    MapComponent.prototype.createMap = function () {
        this.map = new google.maps.Map(this.elem.children[0], {
            center: this.location,
            zoom: 12
        });
    };
    return MapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "location", void 0);
MapComponent = __decorate([
    core_1.Component({
        selector: 'google-map',
        template: '<div class="map-container"></div>',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        styles: ['.map-container { height: 350px; }']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map