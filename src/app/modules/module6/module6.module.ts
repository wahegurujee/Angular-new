import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import {MegaMenuModule} from 'primeng/megamenu';
import {GalleriaModule} from 'primeng/galleria';
import {CalendarModule} from 'primeng/calendar';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TableModule} from 'primeng/table';
import {OrganizationChartModule} from 'primeng/organizationchart';

import { Module6RoutingModule } from './module6-routing.module';
import { Module6Component } from './module6.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Module6RoutingModule,
    ButtonModule,
    SplitButtonModule,
    ConfirmDialogModule,
    FileUploadModule,
    MegaMenuModule,
    GalleriaModule,
    CalendarModule,
    PasswordModule,
    RatingModule,
    ToggleButtonModule,
    TableModule,
    OrganizationChartModule
  ],
  providers:[
    ConfirmationService
  ],

  declarations: [Module6Component]
})
export class Module6Module { }
