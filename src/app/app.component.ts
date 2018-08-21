import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { EventBroadcasterService } from './shared/services/event-broadcaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public el: ElementRef, private eventEmitter: EventBroadcasterService) {}

  ngOnInit() {
    const currObj = this;
    currObj.eventEmitter.react('showAjaxLoader').subscribe(
      displayLoader => currObj.showAjaxLoader()
    );

    currObj.eventEmitter.react('hideAjaxLoader').subscribe(
      hideLoader => currObj.hideAjaxLoader()
    );
  }
  showAjaxLoader() {
    const currObj = this;
    currObj.el.nativeElement.querySelector('.overlay').style.display = 'block';
  }

  hideAjaxLoader() {
    const currObj = this;
    currObj.el.nativeElement.querySelector('.overlay').style.display = 'none';
  }

}
