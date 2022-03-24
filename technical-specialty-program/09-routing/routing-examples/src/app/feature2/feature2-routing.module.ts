import { Feature2TestComponent } from './feature2-test/feature2-test.component';
import { Feature2HomeComponent } from './feature2-home/feature2-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Feature2HomeComponent,
  },
  { path: 'test', component: Feature2TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature2RoutingModule {}
