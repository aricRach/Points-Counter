import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftSideNavigatorComponent} from './left-side-navigator.component';
import {AppRoutingModule} from '../app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    LeftSideNavigatorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    LeftSideNavigatorComponent
  ]
})
export class LeftSideNavigatorModule { }
