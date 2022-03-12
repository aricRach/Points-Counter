import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../models/player.model';
import {PlayersService} from '../state/players.service';
import {Router} from '@angular/router';
import {ModalsService} from '../modals/services/modals.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-set-rating',
  templateUrl: './set-rating.component.html',
  styleUrls: ['./set-rating.component.scss']
})
export class SetRatingComponent implements OnInit {

  @Input() chosenPlayersArray: Player[] = [];
  @Input() notParticipantsPlayers: Player[] = [];

  constructor(private router: Router, private playersService: PlayersService,
              private modalsService: ModalsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  addRating(userIndex: number, isVictory: boolean): void {
      isVictory ? this.chosenPlayersArray[userIndex].wins++ : this.chosenPlayersArray[userIndex].loses++;
  }

  addDraw(userIndex: number): void {
      this.chosenPlayersArray[userIndex].draws++;
  }

  subtractRating(userIndex: number, isVictory: boolean): void {
      if (!isVictory) {
        const currentLoses = this.chosenPlayersArray[userIndex].loses;
        this.chosenPlayersArray[userIndex].loses = currentLoses === 0 ? 0 : currentLoses - 1;
      } else {
        const currentWins = this.chosenPlayersArray[userIndex].wins;
        this.chosenPlayersArray[userIndex].wins = currentWins === 0 ? 0 : currentWins - 1;
    }
  }

  onSave(): void {
    const allPlayers = [...this.chosenPlayersArray, ...this.notParticipantsPlayers];
    localStorage.setItem('result', JSON.stringify(allPlayers));
    this.playersService.emitPlayersChange(allPlayers);
    this._snackBar.open('data saved', 'close', {
      duration: 1500,
      panelClass: 'snackbar-success-dialog'
    });
  }

  onDelete(): void {
    this.modalsService.openDeleteDialog().afterClosed().subscribe(res => {
      if (res === 'delete') {
        localStorage.removeItem('result');
        this.playersService.emitPlayersChange([]);
        this.router.navigate(['/register-players']);
      }
    });
  }
}
