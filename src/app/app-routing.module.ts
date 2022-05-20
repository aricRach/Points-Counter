import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChoosePlayersComponent} from './user-actions-components/choose-players/choose-players.component';
import {SetRatingComponent} from './user-actions-components/set-rating/set-rating.component';
import {RegisterPlayersComponent} from './user-actions-components/register-players/register-players.component';
import {InsightsViewComponent} from './insights/insights-view/insights-view.component';

const routes: Routes = [
  {path: '', component: RegisterPlayersComponent},
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
