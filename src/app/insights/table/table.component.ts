import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';

export interface PeriodicElement {
  name: string;
  position: number;
  win: number;
  lose: number;
  winPercentage: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', win: 1.0079, lose: 'H'},
//   {position: 2, name: 'Helium', win: 4.0026, lose: 'He'},
//   {position: 3, name: 'Lithium', win: 6.941, lose: 'Li'},
//   {position: 4, name: 'Beryllium', win: 9.0122, lose: 'Be'},
//   {position: 5, name: 'Boron', win: 10.811, lose: 'B'},
//   {position: 6, name: 'Carbon', win: 12.0107, lose: 'C'},
//   {position: 7, name: 'Nitrogen', win: 14.0067, lose: 'N'},
//   {position: 8, name: 'Oxygen', win: 15.9994, lose: 'O'},
//   {position: 9, name: 'Fluorine', win: 18.9984, lose: 'F'},
//   {position: 10, name: 'Neon', win: 20.1797, lose: 'Ne'},
// ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'totalGames', 'win', 'lose', 'draws', 'winPercentage'];
  // dataSource = ELEMENT_DATA;

  @Input() players: Player[] = [];
  sortedPlayers: Player[] = [];
  tableData: PeriodicElement[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sortedPlayers = this.players.sort((a: Player, b: Player) => {
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



  // const ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'Hydrogen', win: 1.0079, lose: 'H'},
  //   {position: 2, name: 'Helium', win: 4.0026, lose: 'He'},
  //   {position: 3, name: 'Lithium', win: 6.941, lose: 'Li'},
  //   {position: 4, name: 'Beryllium', win: 9.0122, lose: 'Be'},
  //   {position: 5, name: 'Boron', win: 10.811, lose: 'B'},
  //   {position: 6, name: 'Carbon', win: 12.0107, lose: 'C'},
  //   {position: 7, name: 'Nitrogen', win: 14.0067, lose: 'N'},
  //   {position: 8, name: 'Oxygen', win: 15.9994, lose: 'O'},
  //   {position: 9, name: 'Fluorine', win: 18.9984, lose: 'F'},
  //   {position: 10, name: 'Neon', win: 20.1797, lose: 'Ne'},
  // ];

  getWinP(p: Player): number {
    const totalGames = p.wins + p.loses + p.draws;
    return totalGames ? ((p.wins + (p.draws / 2)) * 100) / totalGames : 0;
  }


}
