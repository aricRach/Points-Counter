import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlayersService} from '../../state/players.service';
import {Subscription} from 'rxjs';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-insights-view',
  templateUrl: './insights-view.component.html',
  styleUrls: ['./insights-view.component.scss']
})
export class InsightsViewComponent implements OnInit, OnDestroy {

  viewOptions = ['chart', 'table'];
  selectedView = this.viewOptions[0];

  private _players: Player[] = [];

  get players(): Player[] {
    return this._players;
  }
  private subscriber = new Subscription();

  constructor(private playersService: PlayersService) {
    this.subscribeToPlayers();
  }

  ngOnInit(): void {
    this.readPlayersFromLocalStorage();
    this.setWinPercentage();
  }

  subscribeToPlayers(): void {
    const subscription = this.playersService.players$.subscribe((players: Player[]) => {
      this._players = players;
    });
    this.subscriber.add(subscription);
  }

  readPlayersFromLocalStorage(): void {
    if (localStorage.getItem('result')) {
      const lastResult = localStorage.getItem('result');
      if (lastResult) {
        this._players =  [...JSON.parse(lastResult) as Player[]];
      }
    }
  }

  setWinPercentage(): void {
    this.players.forEach(player => {
      const totalGames = player.wins + player.loses + player.draws;
      player.winPercentage = totalGames ? +(((player.wins + (player.draws / 2)) * 100) / totalGames).toFixed(2) : 0;
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
