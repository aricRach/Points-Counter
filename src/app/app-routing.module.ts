import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChoosePlayersComponent} from './choose-players/choose-players.component';
import {SetRatingComponent} from './set-rating/set-rating.component';
import {RegisterPlayersComponent} from './register-players/register-players.component';
import {InsightsViewComponent} from './insights/insights-view/insights-view.component';

const routes: Routes = [
  {path: 'select-players', component: ChoosePlayersComponent},
  {path: 'register-players', component: RegisterPlayersComponent},
  {path: 'set-rating', component: SetRatingComponent},
  {path: 'view-insights', component: InsightsViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
