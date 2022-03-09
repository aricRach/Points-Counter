import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights-view',
  templateUrl: './insights-view.component.html',
  styleUrls: ['./insights-view.component.scss']
})
export class InsightsViewComponent implements OnInit {

  viewOptions = ['chart', 'table'];
  selectView = 'chart';
  constructor() { }

  ngOnInit(): void {
  }

}
