import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ModalsModule} from './modals/modals.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InsightsModule} from './insights/insights.module';
import {HeaderModule} from './header/header.module';
import {UserActionsComponentsModule} from './user-actions-components/user-actions-components.module';
import {LeftSideNavigatorModule} from './left-side-navigator/left-side-navigator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ModalsModule,
    InsightsModule,
    HeaderModule,
    UserActionsComponentsModule,
    LeftSideNavigatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
