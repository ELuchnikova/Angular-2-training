import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';

import { RouterModule, Routes } from '@angular/router';

import { LocationService } from './../../services/geolocation';

const mapRoutes: Routes = [
    {
        path: '',
        component: MapComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(mapRoutes)],
    exports: [MapComponent],
    declarations: [MapComponent],
    providers: [LocationService]
})
export class MapModule {}