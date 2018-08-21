import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.css']
})
export class Module3Component implements OnInit {

  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-z]+$'), Validators.minLength(4), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      address: this._formBuilder.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        postalcode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]]
      })
    });
  }
  onSubmit(value, valid) {
    console.log(this.userForm.value);
  }
}
