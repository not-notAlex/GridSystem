import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NodeMapComponent } from './node-map/node-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { RulesComponent } from './rules/rules.component';
import { ConditionsComponent } from './conditions/conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NodeMapComponent,
    DashboardComponent,
    RulesComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
