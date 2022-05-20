import {Component, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';
import {PlayersService} from '../../services/players.service';

@Component({
  selector: 'app-choose-players',
  templateUrl: './choose-players.component.html',
  styleUrls: ['./choose-players.component.scss']
})
export class ChoosePlayersComponent implements OnInit {

  optionalPlayers: Player[] = [];
  chosenPlayers: Player[] = [];
  notParticipantsPlayers: Player[] = [];

  isSetRatingMode = false;

  private _linkName: string;

  constructor(private playersService: PlayersService) {
    this._linkName = 'set ratings';
  }

  ngOnInit(): void {
    this.optionalPlayers = this.playersService.readPlayersFromLocalStorage();
  }

  get linkName(): string {
    return !this.isSetRatingMode ? 'set ratings' : 'choose players';
  }

  addPlayerToChosen(i: number): void {
    this.chosenPlayers.push(this.optionalPlayers[i]);
    this.optionalPlayers = this.optionalPlayers.filter((player: Player) => {
      return player !== this.optionalPlayers[i];
    });
  }

  backPlayerToOptionalList(i: number): void {
    this.optionalPlayers.push(this.chosenPlayers[i]);
    this.chosenPlayers = this.chosenPlayers.filter((player: Player) => {
      return player !== this.chosenPlayers[i];
    });
  }

  toggleRatingMode(): void {
    this.notParticipantsPlayers = this.getNotParticipantsPlayers();
    this.isSetRatingMode = !this.isSetRatingMode;
  }

   getNotParticipantsPlayers(): any[] {
    const notParticipate = this.optionalPlayers.filter((element) => {
      return this.chosenPlayers.indexOf(element) === -1;
    });
    this.optionalPlayers = notParticipate;
    return notParticipate;
  }
}
