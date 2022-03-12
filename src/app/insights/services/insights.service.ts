import { Injectable } from '@angular/core';
import {Player} from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class InsightsService {

  private _players: Player[] = [];

  get players(): Player[] {
    return this._players;
  }

  constructor() {
    this.readPlayersFromLocalStorage();
  }

  readPlayersFromLocalStorage(): void {
    if (localStorage.getItem('result')) {
      const lastResult = localStorage.getItem('result');
      if (lastResult) {
         this._players =  JSON.parse(lastResult) as Player[];
      }
    }
  }
}
