import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';
import {PlayersService} from '../../services/players.service';
import {Router} from '@angular/router';
import {ModalsService} from '../../modals/services/modals.service';
import {AlertsService} from '../../services/alerts.service';

@Component({
  selector: 'app-set-rating',
  templateUrl: './set-rating.component.html',
  styleUrls: ['./set-rating.component.scss']
})
export class SetRatingComponent implements OnInit {

  @Input() chosenPlayersArray: Player[] = [];
  @Input() notParticipantsPlayers: Player[] = [];

  constructor(private router: Router, public playersService: PlayersService,
              private modalsService: ModalsService, private alertsService: AlertsService) { }

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
    this.playersService.savePlayers(allPlayers);
    this.alertsService.showSuccess('data saved');
  }

  onDelete(): void {
    this.modalsService.openDeleteDialog('all your data will be deleted and you wont be able to restore').
    afterClosed().subscribe(res => {
      if (res === 'delete') {
        this.playersService.deleteCurrentGameData();
        this.router.navigate(['/register-players']);
      }
    });
  }
}
