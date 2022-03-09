import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Player} from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  // tslint:disable-next-line:variable-name
  private _players$ = new BehaviorSubject([] as Player[]);

  get players$(): Observable<Player[]> {
    return this._players$.asObservable();
  }

  emitPlayersChange(players: Player[]): void {
    this._players$.next(players);
  }
  constructor() { }
}
