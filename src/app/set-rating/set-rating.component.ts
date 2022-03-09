import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../models/player.model';
import {PlayersService} from '../state/players.service';
import {Router} from '@angular/router';
import {ModalsService} from '../modals/services/modals.service';

@Component({
  selector: 'app-set-rating',
  templateUrl: './set-rating.component.html',
  styleUrls: ['./set-rating.component.scss']
})
export class SetRatingComponent implements OnInit {

  @Input() chosenPlayersArray: Player[] = [];
  @Input() notParticipantsPlayers: Player[] = [];

  constructor(private router: Router, private playersService: PlayersService,
              private modalsService: ModalsService) { }

  ngOnInit(): void {}

  addRating(userIndex: number, isVictory: boolean): void {
    if (this.chosenPlayersArray) {
      isVictory ? this.chosenPlayersArray[userIndex].wins++ : this.chosenPlayersArray[userIndex].loses++;
    }
  }

  subtractRating(userIndex: number, isVictory: boolean): void {
    if (this.chosenPlayersArray) {
      if (!isVictory) {
        const currentLoses = this.chosenPlayersArray[userIndex].loses;
        this.chosenPlayersArray[userIndex].loses = currentLoses === 0 ? 0 : currentLoses - 1;
      } else {
        const currentWins = this.chosenPlayersArray[userIndex].wins;
        this.chosenPlayersArray[userIndex].wins = currentWins === 0 ? 0 : currentWins - 1;
      }
    }
  }

  onSave(): void {
    localStorage.setItem('result', JSON.stringify([...this.chosenPlayersArray, ...this.notParticipantsPlayers]));
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
