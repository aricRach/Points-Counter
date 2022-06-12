import {Component, ViewChild} from '@angular/core';
import {MenuModeService} from '../services/menu-mode.service';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-left-side-navigator',
  templateUrl: './left-side-navigator.component.html',
  styleUrls: ['./left-side-navigator.component.scss']
})
export class LeftSideNavigatorComponent {

  @ViewChild('drawer') drawer: MatDrawer | undefined;
  constructor(public menuModeService: MenuModeService) { }

  toggleMenu(): void {
    this.drawer?.toggle();
    this.changeMenuMode(this.drawer?.opened || false);
  }

  changeMenuMode(mode: boolean): void {
    this.menuModeService.toggleMode(mode);
  }
}
