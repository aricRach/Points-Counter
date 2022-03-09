import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../models/player.model';
import {PlayersService} from '../state/players.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-choose-players',
  templateUrl: './choose-players.component.html',
  styleUrls: ['./choose-players.component.scss']
})
export class ChoosePlayersComponent implements OnInit, OnDestroy {

  optionalPlayers: Player[] = [];

  chosenPlayers: Player[] = [];

  notParticipantsPlayers: Player[] = [];

  isSetRatingMode = false;

  private _linkName: string;

  private subscriber = new Subscription();

  constructor(private playersService: PlayersService) {
    this._linkName = 'set ratings';
  }

  ngOnInit(): void {
    this.subscribeToPlayers();
    this.readPlayers();
  }

  readPlayers(): void {
    if (localStorage.getItem('result')) {
      const lastResult = localStorage.getItem('result');
      if (lastResult) {
        this.optionalPlayers = [...this.optionalPlayers, ...JSON.parse(lastResult) as Player[]] ;
      }
    }
  }

  get linkName(): string {
    return !this.isSetRatingMode ? 'set ratings' : 'choose players';
  }

  subscribeToPlayers(): void {
    const subscription = this.playersService.players$.subscribe((players: Player[]) => {
      this.optionalPlayers = players;
    });
    this.subscriber.add(subscription);
  }

  addPlayerToChosen(i: number): void {
    this.chosenPlayers.push(this.optionalPlayers[i]);
    this.optionalPlayers = this.optionalPlayers.filter((player: Player) => {
      return player !== this.optionalPlayers[i];
    });
  }

  backPlayerToList(i: number): void {
    this.optionalPlayers.push(this.chosenPlayers[i]);
    this.chosenPlayers = this.chosenPlayers.filter((player: Player) => {
      return player !== this.chosenPlayers[i];
    });
  }

  toggleRatingMode(): void {
    this.notParticipantsPlayers = this.getNotParticipantsPlayers();
    this.isSetRatingMode = !this.isSetRatingMode;
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

   getNotParticipantsPlayers(): any[] {
    const nonPartic = this.optionalPlayers.filter((element) => {
      return this.chosenPlayers.indexOf(element) === -1;
    });
    console.log('not:' + nonPartic);
    return nonPartic;
  }
}
