import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-module6',
  templateUrl: './module6.component.html',
  styleUrls: ['./module6.component.css']
})

export class Module6Component implements OnInit {
  data: TreeNode[]; //
  en: any; //for calander
  items: any; // for button
  model_items: any[]; //for megaMenu
  images: any[]; //for Galleriea
  cars: any[]; // json data for all tables 
  checked: boolean; //toggle button checked.
  cols: any[]; //table heading.
  selectedCars: any[]; //selected cae for table export.

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.data = [{
      label: 'Root',
      children: [
          {
              label: 'Child 1',
              children: [
                  {
                      label: 'Grandchild 1.1'
                  },
                  {
                      label: 'Grandchild 1.2'
                  }
              ]
          },
          {
              label: 'Child 2',
              children: [
                  {
                      label: 'Child 2.1'
                  },
                  {
                      label: 'Child 2.2'
                  }
              ]
          }
      ]
  }];
    //calander settings.
    this.en = {
      firstDayOfWeek: 0,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      clear: 'Clear'
    };

    //table json data.
    this.cars = [
      { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
      { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
      { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
      { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
      { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
      { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
      { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
      { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
      { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
      { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
    ];
    //table heading data.
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];


    //Media gallery Images.
    this.images = [];
    this.images.push({ source: 'assets/bike1.jfif', alt: 'World-Wide-Bike', title: 'Bike-1' });
    this.images.push({ source: 'assets/bike2.jfif', alt: 'Image 2', title: 'Bike-2' });
    this.images.push({ source: 'assets/bike3.jfif', alt: 'Image 3', title: 'Bike-3' });
    this.images.push({ source: 'assets/bike4.jfif', alt: 'Dukati', title: 'Bike-4' });
    this.images.push({ source: 'assets/bike5.jfif', alt: 'Dragster', title: 'Bike-5' });


    //button json data.
    this.items = [
      {
        label: 'Update', icon: 'fa-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
      { label: 'Home', icon: 'fa-paint-brush', routerLink: ['/home'] }
    ];


    //Mega-Menu-json-data.
    this.model_items = [
      {
        label: 'TV', icon: 'fa-check',
        items: [
          [
            {
              label: 'TV 1',
              items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
            },
            {
              label: 'TV 2',
              items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
            }
          ],
          [
            {
              label: 'TV 3',
              items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
            },
            {
              label: 'TV 4',
              items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
            }
          ]
        ]
      },
      {
        label: 'Sports', icon: 'fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
            },
            {
              label: 'Sports 2',
              items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
            },
            {
              label: 'Sports 4',
              items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
            },
            {
              label: 'Sports 6',
              items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
            }
          ]
        ]
      }
    ];

  }
  //button dropdown alert functions.
  update() {
    alert("Data Updated")
  }
  delete() {
    alert("Data Deleted")
  }


  //Dialog-Box-Confirm-Function.
  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }

  //Mega-Menu-logout function.
  logout() {
    window.location.href = '/home';
  }
}
