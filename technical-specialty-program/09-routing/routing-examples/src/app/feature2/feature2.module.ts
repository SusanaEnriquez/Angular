import { MaterialModule } from './../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2HomeComponent } from './feature2-home/feature2-home.component';
import { Feature2TestComponent } from './feature2-test/feature2-test.component';

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule,
    MaterialModule
  ],
  declarations: [Feature2HomeComponent, Feature2TestComponent]
})
export class Feature2Module { }
