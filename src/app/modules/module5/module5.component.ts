import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-module5',
  templateUrl: './module5.component.html',
  styleUrls: ['./module5.component.css']
})
export class Module5Component implements OnInit {


    @ViewChild('validateForm')
    private validateForm: NgForm;

    constructor() {
    }


    register(validateForm: NgForm) {
      console.log('Registration successful.');
      console.log(validateForm.value);
      alert('Hii' + validateForm.value.name + ' your information are valid.' );
    }
    ngOnInit() {

    }
}
