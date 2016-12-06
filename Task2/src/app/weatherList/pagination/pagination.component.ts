import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'list-pagination',
    template: `<div class="col-sm-5 col-sm-offset-4">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li [class.disabled]="currentPage === 1">
                            <a href="#prev" aria-label="Previous" (click)="previousPage($event)">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li *ngFor="let page of pages" [class.active]="page === currentPage">
                            <a href="#{{page}}" (click)="changePage($event, page)">{{page}}</a>
                        </li>
                        <li [class.disabled]="currentPage === totalCount">
                            <a href="#next" aria-label="Next" (click)="nextPage($event)">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>`
})
export class PaginationListComponent implements OnChanges {
    private pages: Array<number>;
    @Input() totalCount: number;
    @Input() currentPage: number;
    @Output() setPage = new EventEmitter();

    ngOnChanges() {
        if (this.totalCount !== undefined && (!this.pages  || (this.totalCount !== this.pages.length))) {
            this.pages = [1];
            for (let i = 2; i <= this.totalCount; i++) {
                this.pages.push(i);
            }
        }
    }

    private changePage($event: Event, newPage: number): void {
        $event.preventDefault();

        this.currentPage = newPage;

        this.emit();
    }

    private nextPage($event: Event): void {
        $event.preventDefault();

        if (this.currentPage !== this.totalCount) {
            this.currentPage++;
        }

        this.emit();
    }

    private previousPage($event: Event): void {
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