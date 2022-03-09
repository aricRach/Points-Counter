import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DeleteModalComponent} from '../components/delete-modal/delete-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor(private dialog: MatDialog) { }

  openDeleteDialog(): MatDialogRef<DeleteModalComponent> {
    return this.dialog.open(DeleteModalComponent, {
      width: '300px',
      height: '280px',
    });
  }
}
