import { NgModule, ModuleWithProviders, Injectable} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
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
    imports: [CommonModule, MaterialModule, RouterModule],
    declarations: [
        NavigationComponent,
        LoaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        CustomIf
    ],
    exports: [
        CommonModule,
        RouterModule,
        NavigationComponent,
        LoaderComponent,
        FooterComponent,
        PageNotFoundComponent
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