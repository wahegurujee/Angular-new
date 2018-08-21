import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import { Module7RoutingModule } from './module7-routing.module';
import { Module7Component } from './module7.component';

@NgModule({
  imports: [
    CommonModule,
    Module7RoutingModule
  ],
  declarations: [Module7Component,DoughnutChartComponent, 
    PieChartComponent, 
    BarChartComponent,]
})
export class Module7Module { }
