import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Player} from '../../../models/player.model';
import {PlayersService} from '../../../services/players.service';
import {ModalsService} from '../../../modals/services/modals.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-players.component.html',
  styleUrls: ['./register-players.component.scss']
})
export class RegisterPlayersComponent implements OnInit {

  allPlayers = [] as Player[];
  registerPlayerForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  get name(): string {
    return this.registerPlayerForm.get('name')?.value;
  }

  constructor(private playersService: PlayersService, private modalsService: ModalsService,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.allPlayers = this.playersService.readPlayersFromLocalStorage();
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
      this._snackBar.open('player with this name is already exist', 'close', {
        duration: 1500,
        panelClass: 'snackbar-danger-dialog'
      });
    }
  }

  savePlayers(): void {
    this.playersService.savePlayers(this.allPlayers);
  }
}
