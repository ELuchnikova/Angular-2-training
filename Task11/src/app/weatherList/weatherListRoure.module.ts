import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherListComponent } from './weatherList.component';
import { WeatherDetailsComponent } from './weatherDetails/weatherDetails.component';

import { GuardService } from './../../services/guard.service';

const weatherRoutes: Routes = [
    {
        path: 'weather',
        component: WeatherListComponent,
    },
    {
        path: 'weatherDetails/:id',
        canActivate : [ GuardService ],
        component: WeatherDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(weatherRoutes)
    ],
    exports: [RouterModule]
})
export class WeatherRoutesModule {}