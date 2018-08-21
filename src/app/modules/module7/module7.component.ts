import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module7',
  templateUrl: './module7.component.html',
  styleUrls: ['./module7.component.css']
})
export class Module7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public donutChartData = [{
    id: 0,
    label: 'water',
    value: 20,
    color: '#5abcd8',
  }, {
    id: 1,
    label: 'land',
    value: 20,
    color: '#2389da',
  }, {
    id: 2,
    label: 'sand',
    value: 30,
    color: '#1ca3ec',
  }, {
    id: 3,
    label: 'grass',
    value: 20,
    color: '#5abcd8',
  }, {
    id: 4,
    label: 'earth',
    value: 10,
    color: '#74ccf4',
  }];
}
