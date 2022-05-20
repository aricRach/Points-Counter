import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';

export interface TableElement {
  name: string;
  position: number;
  win: number;
  lose: number;
  winPercentage: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'totalGames', 'win', 'lose', 'draws', 'winPercentage'];

  @Input() players: Player[] = [];
  tableData: TableElement[] = [];

  constructor() {}

  ngOnInit(): void {
    this.players.sort((a: Player, b: Player) => {
      if (this.getWinP(a) > this.getWinP(b)){
        return -1;
      }
      return 1;
    });
    this.createTableData();
  }

  createTableData(): void {
    let i = 1;
    this.tableData = this.players.map((player: Player) => {
      return {
        position: i++,
        name: player.name,
        games: player.wins + player.loses + player.draws,
        win: player.wins,
        lose: player.loses,
        draw: player.draws,
        winPercentage: player.winPercentage ? player.winPercentage : 0
      };
    });
    }

  getWinP(p: Player): number {
    const totalGames = p.wins + p.loses + p.draws;
    return totalGames ? ((p.wins + (p.draws / 2)) * 100) / totalGames : 0;
  }
}
