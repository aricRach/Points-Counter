import { Injectable } from '@angular/core';
import {Player} from '../models/player.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

  readonly localStorageName = 'points-counter';
  private _gameName$ = new BehaviorSubject('');

  get _gameName(): Observable<any> {
    return this._gameName$.asObservable();
  }

  constructor() { }

  changeGameName(name: string): void {
    this._gameName$.next(name);
  }

  readPlayersFromLocalStorage(): Player[] {
    const allResults = localStorage.getItem(this.localStorageName);
    if (allResults) {
      const games = JSON.parse(allResults);
      const players = games[this._gameName$.getValue()];
      return players ? players : [];
    }
    return [];
  }

  readGamesFromLocalStorage(): string[] {
    const allGames = localStorage.getItem(this.localStorageName);
    if (allGames) {
      const allGamesObject = JSON.parse(allGames);
      return Object.keys(allGamesObject).filter(name => {
        return allGamesObject[name] != null;
      });
    }
    return [];
  }

   savePlayers(allPlayers: Player[]): void {
     const allGames = JSON.parse(localStorage.getItem(this.localStorageName) as any) || {};
     allGames[this._gameName$.getValue()] = allPlayers;
     localStorage.setItem('points-counter', JSON.stringify(allGames));
  }

  deleteCurrentGameData(): void {
    const allGames = JSON.parse(localStorage.getItem(this.localStorageName) as any) || {};
    allGames[this._gameName$.getValue()] = null;
    localStorage.setItem('points-counter', JSON.stringify(allGames));
    this._gameName$.next('');
  }

  deleteAllGamesData(): void {
    localStorage.removeItem(this.localStorageName);
    this._gameName$.next('');
  }
}
