import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthGuard } from './shared/guard/user-auth.guard';
import { HttpClientInterceptorService } from './shared/services/http-client-interceptor.service';
import { RestClientService } from './shared/services/rest-client.service';
import { EventBroadcasterService } from './shared/services/event-broadcaster.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AccordionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptorService,
      multi: true,
    },
    EventBroadcasterService,
    RestClientService,
    UserAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
