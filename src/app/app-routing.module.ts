import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RulesComponent } from './rules/rules.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { NodeMapComponent } from './node-map/node-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'character', component: NodeMapComponent},
  { path: 'character', component: DashboardComponent, outlet: 'secondary'},
  { path: 'rules', component: RulesComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: '', component: NodeMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
