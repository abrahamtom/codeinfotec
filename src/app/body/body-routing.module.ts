import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const ModuleRoutes: Routes = [
    {
        path:'landing',component: LandingpageComponent
        
     },
     {
        path:'about',component: AboutusComponent
     }
    ];
     export const moduleRouting: ModuleWithProviders = RouterModule.forChild(ModuleRoutes)