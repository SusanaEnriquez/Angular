import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidenavListComponent, PageNotFoundComponent, HeaderNavigationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [SidenavListComponent, PageNotFoundComponent, HeaderNavigationComponent]
})
export class CoreModule { }
