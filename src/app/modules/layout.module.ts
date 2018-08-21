import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { GlobalHeaderComponent } from '../shared/components/global-header/global-header.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    GlobalHeaderComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
