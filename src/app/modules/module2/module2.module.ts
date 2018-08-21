import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule,
    RouterModule,
    ChartsModule,
    ChartModule
  ],
  declarations: [Module2Component]
})
export class Module2Module { }
