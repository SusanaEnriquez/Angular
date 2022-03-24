import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  // Form data
  userName = 'Bob';
  email: string;
  nickName: string;
  password: string;

  constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.number3 = 0;
    this.number4 = 0;
  }
  ngOnInit() {}

  onCountChanged(value: number) {
    this.number3 = value;
    this.number4 = value;
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
