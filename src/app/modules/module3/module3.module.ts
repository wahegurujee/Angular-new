import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Module3RoutingModule } from './module3-routing.module';
import { Module3Component } from './module3.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Module3RoutingModule,
    RouterModule,FormsModule, ReactiveFormsModule
  ],
  declarations: [Module3Component]
})
export class Module3Module { }
