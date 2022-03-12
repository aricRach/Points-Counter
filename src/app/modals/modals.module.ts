import { NgModule } from '@angular/core';

import { ModalsService } from './services/modals.service';
import {MatButtonModule} from '@angular/material/button';
import {DeleteModalComponent} from './components/delete-modal/delete-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [
    DeleteModalComponent
  ],
  providers: [
    ModalsService
  ],
  exports: [
    DeleteModalComponent
  ]
})
export class ModalsModule { }
