import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { CustomIf } from './../../directives/customIf';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [
        NavigationComponent,
        LoaderComponent,
        FooterComponent,
        CustomIf
    ],
    exports: [
        CommonModule,
        NavigationComponent,
        LoaderComponent,
        FooterComponent
    ]
})
export class CoreModule {}