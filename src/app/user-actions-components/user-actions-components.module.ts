import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterPlayersComponent} from './register-players/register-players.component';
import {ChoosePlayersComponent} from './choose-players/choose-players.component';
import {SetRatingComponent} from './set-rating/set-rating.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    RegisterPlayersComponent,
    ChoosePlayersComponent,
    SetRatingComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule
  ]
})
export class UserActionsComponentsModule { }
