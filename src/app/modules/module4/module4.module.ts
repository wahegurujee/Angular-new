import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Module4RoutingModule } from './module4-routing.module';
import { Module4Component } from './module4.component';

@NgModule({
  imports: [
    CommonModule,
    Module4RoutingModule,
    RouterModule
  ],
  declarations: [Module4Component]
})
export class Module4Module { }
