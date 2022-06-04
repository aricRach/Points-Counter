import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Player} from '../../../models/player.model';

@Component({
  selector: 'app-available-players',
  templateUrl: './available-players.component.html',
  styleUrls: ['./available-players.component.scss']
})
export class AvailablePlayersComponent {

  @Input() players!: Player[];

  @Output() PlayerDeleted = new EventEmitter();

  constructor() { }

  onDeletePlayer(index: number): void {
    this.PlayerDeleted.emit(index);
  }
}
