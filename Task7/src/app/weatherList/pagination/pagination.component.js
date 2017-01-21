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
var PaginationListComponent = (function () {
    function PaginationListComponent() {
        this.setPage = new core_1.EventEmitter();
    }
    PaginationListComponent.prototype.ngOnChanges = function (changes) {
        if (this.totalCount !== undefined && (!this.pages || (this.totalCount !== this.pages.length))) {
            this.pages = Array.from(Array(this.totalCount).keys());
            this.pages = this.pages.map(function (item) { return ++item; });
        }
    };
    PaginationListComponent.prototype.changePage = function (newPage) {
        if (this.currentPage !== newPage) {
            this.currentPage = newPage;
            this.emit();
        }
    };
    PaginationListComponent.prototype.nextPage = function ($event) {
        $event.preventDefault();
        if (this.currentPage !== this.totalCount) {
            this.currentPage++;
        }
        this.emit();
    };
    PaginationListComponent.prototype.previousPage = function ($event) {
        $event.preventDefault();
        if (this.currentPage !== 1) {
            this.currentPage--;
        }
        this.emit();
    };
    PaginationListComponent.prototype.emit = function () {
        this.setPage.emit({
            newPage: this.currentPage
        });
    };
    return PaginationListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationListComponent.prototype, "totalCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationListComponent.prototype, "currentPage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PaginationListComponent.prototype, "setPage", void 0);
PaginationListComponent = __decorate([
    core_1.Component({
        selector: 'list-pagination',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: "<div class=\"col-sm-5 col-sm-offset-4\">\n                    <md-button-toggle-group #group=\"mdButtonToggleGroup\" (change)=\"changePage(+group.value)\" [value]=\"currentPage\">\n                        <button md-raised-button [class.disabled]=\"currentPage === 1\" (click)=\"previousPage($event)\">\n                            <span aria-hidden=\"true\">&laquo;</span>\n                        </button>\n                        <md-button-toggle  *ngFor=\"let page of pages\" value=\"{{page}}\" >\n                            {{page}}\n                        </md-button-toggle>\n                        <button md-raised-button [class.disabled]=\"currentPage === totalCount\" (click)=\"nextPage($event)\">\n                            <span aria-hidden=\"true\">&raquo;</span>\n                        </button>\n                    </md-button-toggle-group>\n                </div>"
    }),
    __metadata("design:paramtypes", [])
], PaginationListComponent);
exports.PaginationListComponent = PaginationListComponent;
//# sourceMappingURL=pagination.component.js.map