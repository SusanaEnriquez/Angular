import { MaterialModule } from './../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature3-routing.module';
import { Feature3HomeComponent } from './feature3-home/feature3-home.component';
import { GuardTestComponent } from './guard-test/guard-test.component';

@NgModule({
  imports: [CommonModule, Feature3RoutingModule, MaterialModule],
  declarations: [Feature3HomeComponent, GuardTestComponent],
})
export class Feature3Module {}
