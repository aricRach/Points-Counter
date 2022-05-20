import { Injectable } from '@angular/core';
import {Player} from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  readPlayersFromLocalStorage(): Player[] {
    if (localStorage.getItem('result')) {
      const lastResult = localStorage.getItem('result');
      if (lastResult) {
        return JSON.parse(lastResult) as Player[];
      }
    }
    return [];
  }

   savePlayers(allPlayers: Player[]): void {
    localStorage.setItem('result', JSON.stringify(allPlayers));
  }
}
