import { Feature3HomeComponent } from './feature3-home/feature3-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test3Guard } from './test3.guard';
import { GuardTestComponent } from './guard-test/guard-test.component';

const routes: Routes = [
  {
    path: '',
    component: Feature3HomeComponent,
  },
  {
    path: 'guard-test',
    component: GuardTestComponent,
    canActivate: [Test3Guard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature3RoutingModule {}
