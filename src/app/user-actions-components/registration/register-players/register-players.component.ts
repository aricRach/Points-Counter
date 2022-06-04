import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Player} from '../../../models/player.model';
import {PlayersService} from '../../../services/players.service';
import {ModalsService} from '../../../modals/services/modals.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AlertsService} from '../../../services/alerts.service';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-players.component.html',
  styleUrls: ['./register-players.component.scss']
})
export class RegisterPlayersComponent implements OnInit, OnDestroy {

  allPlayers = [] as Player[];
  registerPlayerForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  currentGameName = '';
  games!: string[];
  private _subscriber = new Subscription();

  get name(): string {
    return this.registerPlayerForm.get('name')?.value;
  }

  constructor(public playersService: PlayersService, private modalsService: ModalsService,
              private router: Router, private alertsService: AlertsService) {}

  ngOnInit(): void {
    // this.allPlayers = this.playersService.readPlayersFromLocalStorage() || [];
    this.games = this.playersService.readGamesFromLocalStorage();
    this.subscribeToGameName();
  }

  private subscribeToGameName(): void {
    const subscription = this.playersService._gameName.subscribe((name: string) => {
      this.currentGameName = name;
      if (name) {
        this.allPlayers = this.playersService.readPlayersFromLocalStorage();
      }
    });
    this._subscriber.add(subscription);
  }

  deleteNewPlayer(index: number): void {
    this.modalsService.openDeleteDialog(`after you click on save, all the previous data of this user will be removed`)
      .afterClosed().subscribe((res) => {
      if (res === 'delete') {
        this.allPlayers = this.allPlayers.filter((player: Player) => {
          return player !== this.allPlayers[index];
        });
      }
    });
  }

  onSubmit(): void {
    const foundIndex = this.allPlayers.findIndex((player: Player) => {
      return player.name === this.name;
    });
    if (foundIndex === -1) {
      this.allPlayers.push({name: this.name, wins: 0, loses: 0, draws: 0});
      this.registerPlayerForm.reset();
    } else {
      this.alertsService.showAlert('player with this name is already exist');
    }
  }

  savePlayers(): void {
    this.playersService.savePlayers(this.allPlayers);
  }

  deleteAllGamesData(): void {
    this.modalsService.openDeleteDialog(' The data of all your games will be deleted and you wont be able to restore').
    afterClosed().subscribe(res => {
      if (res === 'delete') {
        this.playersService.deleteAllGamesData();
        this.games = [];
      }
    });
  }

  ngOnDestroy(): void {
    this._subscriber.unsubscribe();
  }
}
