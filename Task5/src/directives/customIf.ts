import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[customIf]'
})
export class CustomIf implements OnChanges {
    @Input('customIf') condition: number;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {}

    ngOnChanges() {
        if (!!this.condition === true) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}