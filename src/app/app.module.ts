import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPlayersComponent } from './register-players/register-players.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChoosePlayersComponent } from './choose-players/choose-players.component';
import { SetRatingComponent } from './set-rating/set-rating.component';
import { DoughnutChartComponent } from './insights/doughnut-chart/doughnut-chart.component';
import {ChartsModule} from 'ng2-charts';
import { InsightsViewComponent } from './insights/insights-view/insights-view.component';
import { MatButtonModule } from '@angular/material/button';
import {ModalsModule} from './modals/modals.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPlayersComponent,
    ChoosePlayersComponent,
    SetRatingComponent,
    DoughnutChartComponent,
    InsightsViewComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule,
    FormsModule,
    ModalsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
