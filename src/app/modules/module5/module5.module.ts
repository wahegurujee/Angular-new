import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Module5RoutingModule } from './module5-routing.module';
import { Module5Component } from './module5.component';
import { ErrorsComponent } from './error.component';
import { AgeValidatorDirective } from './validators/age-validators.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    Module5RoutingModule,
    RouterModule,
    FormsModule
  ],
  declarations: [Module5Component, ErrorsComponent, AgeValidatorDirective, EmailValidatorDirective]
})
export class Module5Module { }
