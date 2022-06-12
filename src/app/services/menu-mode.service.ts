import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuModeService {

  private isOpen$ = new BehaviorSubject(false);

  get _isOpen(): Observable<any> {
    return this.isOpen$.asObservable();
  }

  toggleMode(newMode: boolean): void {
    this.isOpen$.next(newMode);
  }

  constructor() { }
}
