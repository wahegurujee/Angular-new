import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module4',
  templateUrl: './module4.component.html',
  styleUrls: ['./module4.component.css']
})
export class Module4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          "name": "Douglas  Pace",
          "age": 35
        },
        {
          "name": "Mcleod  Mueller",
          "age":12
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          "name": "Day  Meyers",
          "age":15
        },
        {
          "name": "Aguirre  Ellis",
          "age":68
        },
        {
          "name": "Cook  Tyson",
          "age":52
        }
      ]
    }
  ];



  user: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];
}

