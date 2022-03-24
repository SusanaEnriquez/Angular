import { MaterialModule } from './../core/material/material.module';
import { Feature1RoutingModule } from './feature1-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1test1Component } from './f1test1/f1test1.component';
import { F1test2Component } from './f1test2/f1test2.component';
import { F1test3Component } from './f1test3/f1test3.component';
import { FeatureHomeComponent } from './feature-home/feature-home.component';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule,
    MaterialModule
  ],
  declarations: [F1test1Component, F1test2Component, F1test3Component, FeatureHomeComponent]
})
export class Feature1Module { }
