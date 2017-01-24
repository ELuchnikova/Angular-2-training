import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { CustomIf } from './../../directives/customIf';

import { LocationService } from './../../services/geolocation';
import { LoggerService } from './../../services/loggerService';

export function loggerFactory() {
    if (process.env.NODE_ENV === 'development') {
        const { DevLoggerService } = require('./../../services/loggerService');
        return  new DevLoggerService();
    } else {
        return  new LoggerService();
    }
}

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
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: LoggerService,
                    useFactory: loggerFactory

                },
                LocationService
            ]
        };
    }
}