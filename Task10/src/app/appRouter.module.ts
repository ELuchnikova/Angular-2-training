import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/pageNotFound/pageNotFound.component';
import { WidgetComponent } from './widget/widget.component';

import { PreloadService } from './../services/preload.service';

const appRoutes: Routes = [
    {
        path: 'map',
        loadChildren: './map/map.module#MapModule'
        // component: MapComponent
    },
    {
        path: 'widget',
        component: WidgetComponent,
        outlet: 'widget'
    },
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,  {
            useHash: true,
            preloadingStrategy: PreloadService
        })
    ],
    exports: [RouterModule]
})
export class AppRoutesModule {}