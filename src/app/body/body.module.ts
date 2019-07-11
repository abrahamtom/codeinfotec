import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import{ moduleRouting } from './body-routing.module';
import { from } from 'rxjs';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [LandingpageComponent, AboutusComponent],
  imports: [
    CommonModule,
    moduleRouting
  ]
})
export class BodyModule { }
