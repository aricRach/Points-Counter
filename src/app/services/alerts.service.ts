import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private _snackBar: MatSnackBar) { }

  showAlert(msg: string, action = 'close'): void {
    this._snackBar.open(msg, action, {
      duration: 1500,
      panelClass: 'snackbar-danger-dialog'
    });
  }

  showSuccess(msg: string, action = 'close'): void {
    this._snackBar.open(msg, action, {
      duration: 1500,
      panelClass: 'snackbar-success-dialog'
    });
  }
}
