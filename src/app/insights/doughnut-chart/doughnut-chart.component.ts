import {Component, Input, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [];
  doughnutChartType: ChartType = 'doughnut';

  @Input() players: Player[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initChartVariables();
  }

  initChartVariables(): void {
    this.doughnutChartLabels = this.players.map(({name}) => name) as Label[];
    this.doughnutChartData = [this.players.map(player => {
      return player.winPercentage;
    })];
  }
}
