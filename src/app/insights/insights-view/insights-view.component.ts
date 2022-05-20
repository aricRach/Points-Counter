import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-insights-view',
  templateUrl: './insights-view.component.html',
  styleUrls: ['./insights-view.component.scss']
})
export class InsightsViewComponent implements OnInit {

  viewOptions = ['chart', 'table'];
  selectedView = this.viewOptions[0];

  private _players: Player[] = [];

  get players(): Player[] {
    return this._players;
  }

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this._players = this.playersService.readPlayersFromLocalStorage();
    this.setWinPercentage();
  }

  setWinPercentage(): void {
    this.players.forEach(player => {
      const totalGames = player.wins + player.loses + player.draws;
      player.winPercentage = totalGames ? +(((player.wins + (player.draws / 2)) * 100) / totalGames).toFixed(2) : 0;
    });
  }
}
