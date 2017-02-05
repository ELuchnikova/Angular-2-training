import { NgModule, ModuleWithProviders, Injectable} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { CustomIf } from './../../directives/customIf';

import { LocationService } from './../../services/geolocation';
import { LoggerService } from './../../services/loggerService';


export function loggerFactory() {
    // if (process.env.NODE_ENV === 'development') {
        // import { DevLoggerService } from './../../services/devloggerService';
        // const DevLoggerServiceModule = require('ts-loader!./../../services/devloggerService');
        // const DevLoggerServiceModule = require('babel-loader!./../../services/jsLogger');

        // console.log('service', DevLoggerServiceModule);
        //
        // return  new DevLoggerServiceModule.DevLoggerService();
    // } else {
        // const { LoggerService } = require('./../../services/loggerService');
        return  new LoggerService();
    // }
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