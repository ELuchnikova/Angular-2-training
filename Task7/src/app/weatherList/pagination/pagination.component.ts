import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'list-pagination',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div class="col-sm-5 col-sm-offset-4">
                    <md-button-toggle-group #group="mdButtonToggleGroup" (change)="changePage(+group.value)" [value]="currentPage">
                        <button md-raised-button [class.disabled]="currentPage === 1" (click)="previousPage($event)">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                        <md-button-toggle  *ngFor="let page of pages" value="{{page}}" >
                            {{page}}
                        </md-button-toggle>
                        <button md-raised-button [class.disabled]="currentPage === totalCount" (click)="nextPage($event)">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </md-button-toggle-group>
                </div>`
})
export class PaginationListComponent implements OnChanges {
    public pages: Array<number>;
    @Input() totalCount: number;
    @Input() currentPage: number;
    @Output() setPage = new EventEmitter();

    ngOnChanges(changes: SimpleChanges) {
        if (this.totalCount !== undefined && (!this.pages  || (this.totalCount !== this.pages.length))) {
            this.pages = Array.from(Array(this.totalCount).keys());
            this.pages = this.pages.map((item: number) => ++item);
        }
    }

    public changePage(newPage: number): void {

        if (this.currentPage !== newPage) {
            this.currentPage = newPage;
            this.emit();
        }
    }

    public nextPage($event: Event): void {
        $event.preventDefault();

        if (this.currentPage !== this.totalCount) {
            this.currentPage++;
        }

        this.emit();
    }

    public previousPage($event: Event): void {
        $event.preventDefault();

        if (this.currentPage !== 1) {
            this.currentPage--;
        }

        this.emit();
    }

    private emit(): void {
        this.setPage.emit({
            newPage: this.currentPage
        });
    }
}