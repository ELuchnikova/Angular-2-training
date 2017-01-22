import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationService } from './../../services/geolocation';
import { LoggerService, DevLoggerService } from './../../services/loggerService';

export function loggerFactory() {
    return process.env.NODE_ENV === 'development'
        ? new DevLoggerService()
        : new LoggerService();
}

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
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