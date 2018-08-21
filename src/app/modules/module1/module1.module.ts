import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { Module1Service } from './module1.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    RouterModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule
  ],
  declarations: [Module1Component],
  providers: [
    Module1Service
  ]
})
export class Module1Module { }
