import {Component, Input, OnInit} from '@angular/core';
import {PlayersService} from '../../../services/players.service';
import {AlertsService} from '../../../services/alerts.service';

@Component({
  selector: 'app-game-name-input',
  templateUrl: './game-name-input.component.html',
  styleUrls: ['./game-name-input.component.scss']
})
export class GameNameInputComponent implements OnInit {

  @Input() optionName = '';
  @Input() games: string[] = [];
  newName = '';

  constructor(public playersService: PlayersService, private alertsService: AlertsService) { }

  ngOnInit(): void {
   this.initializeOptionName();
  }

  private initializeOptionName(): void {
    if (!this.optionName) { // when the app first load or after hard refresh
      this.optionName = this.games[0];
      setTimeout(() => {
        this.playersService.changeGameName(this.optionName);
      }, 0);
    }
  }

  setGameName(name: any): void {
    const foundIndex = this.games.findIndex((gameName: string) => {
      return gameName === name;
    });
    if (foundIndex === -1) {
      this.playersService.changeGameName(name);
      this.games.push(name);
      this.optionName = this.newName;
    } else {
      this.alertsService.showAlert('game with this name is already exist');
    }
  }

  loadGameName(name: string): void {
    this.playersService.changeGameName(name);
    this.optionName = name;
  }
}
