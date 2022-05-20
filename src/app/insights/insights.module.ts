import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
import {DoughnutChartComponent} from './doughnut-chart/doughnut-chart.component';
import {InsightsViewComponent} from './insights-view/insights-view.component';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DoughnutChartComponent,
    TableComponent,
    InsightsViewComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatTableModule,
    FormsModule
  ],
  exports: [ChartsModule, MatTableModule, FormsModule]
})
export class InsightsModule { }
