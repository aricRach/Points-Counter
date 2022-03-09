import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Player} from '../models/player.model';
import {PlayersService} from '../state/players.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-players.component.html',
  styleUrls: ['./register-players.component.scss']
})
export class RegisterPlayersComponent implements OnInit {

  newPlayers = [] as Player[];
  registerPlayerForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  private subscriber = new Subscription();


  get name(): string {
    return this.registerPlayerForm.get('name')?.value;
  }

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.subscribeToPlayers();
  }

  subscribeToPlayers(): void {
    const subscription = this.playersService.players$.subscribe((players: Player[]) => {
      this.newPlayers = players;
    });
    this.subscriber.add(subscription);
  }

  deleteNewPlayer(index: number): void {
    this.newPlayers = this.newPlayers.filter((player: Player) => {
      return player !== this.newPlayers[index];
    });
    this.playersService.emitPlayersChange(this.newPlayers);
  }

  onSubmit(): void {
    this.newPlayers.push({name: this.name, wins: 0, loses: 0});
    this.playersService.emitPlayersChange(this.newPlayers);
    this.registerPlayerForm.reset();
  }
}
