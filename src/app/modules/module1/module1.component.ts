import { Component, OnInit, ElementRef } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import { Module1Service } from './module1.service';
import {EventBroadcasterService} from '../../shared/services/event-broadcaster.service';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {
  settings: any;
  source: LocalDataSource;
  constructor(public el: ElementRef, private eventEmitter: EventBroadcasterService, private module1Service: Module1Service) { }
  // ngOnInit() {
  //   this.settings = {
  //     attr: {
  //       id: 'table-users',
  //       class: 'table table-bordered table-users'
  //     },
  //     actions: {
  //       add: true,
  //       edit: true,
  //       delete: true
  //     },
  //     noDataMessage: 'No data found.',
  //     columns: {
  //       name: {
  //         title: 'Display Name',
  //         class: 'col-name',
  //         editable: true
  //       },
  //       preferredUsername: {
  //         title: 'User Name',
  //         class: 'col-preferredUsername',
  //         editable: true
  //       },
  //       email: {
  //         title: 'Email ID',
  //         class: 'col-email',
  //         editable: true
  //       },
  //       contactNumber: {
  //         title: 'Contact Number',
  //         class: 'col-contactNumber',
  //         editable: true
  //       },
  //     },
  //     pager: {
  //       display: true,
  //       perPage:1
  //     }
  //   };
  //   // Fetch User List
  //   this.getUserList();
    
  // }
  // getUserList() {
  //   const self = this;
  //   self.eventEmitter.trigger('showAjaxLoader');
  //   self.module1Service.getUsers().subscribe(
  //     response => {
  //       this.source = new LocalDataSource(response);
  //       self.eventEmitter.trigger('hideAjaxLoader');
  //     },
  //     error => {
  //       // The call is successful, but there is some parsing error - happens only in IE,
  //       // in this case consider this call as successful.
  //       // @TODO Show Error
  //       self.eventEmitter.trigger('hideAjaxLoader');
  //     }
  //   );
  // }
  data = [
    {
       id: 1,
       name: 'Leanne Graham',
       username: "Bret",
       email: "Sincere@april.biz"
     },
     {
     id: 2,
       name: "Ervin Howell",
       username: "Antonette",
       email: "Shanna@melissa.tv"
     },
     {
       id: 3,
       name: "Nicholas DuBuque",
       username: "Nicholas.Stanton",
       email: "Rey.Padberg@rosamond.biz"
     },
     {
      id: 4,
       name: "Leanne Graham",
       username: "Bret",
       email: "Sincere@april.biz"
     },
     {
       id: 5,
       name: "Ervin Howell",
       username: "Antonette",
       email: "Shanna@melissa.tv"
     },
     {
       id: 6,
       name: "Nicholas DuBuque",
       username: "Nicholas.Stanton",
       email: "Rey.Padberg@rosamond.biz"
     },
     
   ];
  
   ngOnInit() {
     this.settings = {
     attr: {
       id: 'table-users',
       class: 'table table-bordered table-users'
     },
     actions: {
       add: true,
       edit: true,
       delete: true
     },
     noDataMessage: 'No data found.',
       columns: {
         id: {
           title: 'ID'
        },
        name: {
          title: 'Full Name'
        },
        username: {
          title: 'User Name'
        },
        email: {
          title: 'Email'
        }
      },
      pager: {
        display: true,
        perPage: 3
      }
     };
   }


}
