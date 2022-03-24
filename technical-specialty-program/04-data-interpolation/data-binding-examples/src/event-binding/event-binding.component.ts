import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  iWasClicked = false;
  iWasClickedText = 'I have not been Clicked';
  importantFormData: any;
  noSpaceValidation = false;
  noZeroValidation = false;
  counter = 0;
  constructor() {}

  ngOnInit() {}

  clickMethod(eventStatus) {
    if (eventStatus === 'clicked') {
      this.iWasClicked = true;
      this.iWasClickedText = 'bieng clicked is Awesome! ';
    }
  }

  onSave(form, event) {
    event.preventDefault();
    // here we could possibly send our data on save to a service for example
    // return this.saveEndpoint.post();
    this.importantFormData = event;
  }

  onCancel(form, event) {
    event.preventDefault();
    form.reset();
    console.log('canceled', event);
  }

  validateNoSpace(input, event) {
    if (event.keyCode === 32) {
      this.noSpaceValidation = true;
      input.value = '';
      console.log('Entered text: ', event.target.value);
    } else {
      this.noSpaceValidation = false;
    }
  }

  gradeCannotHaveZero(input, event) {
    if (input.value.includes(0)) {
      this.noZeroValidation = true;
      input.value = '';
      console.log('Entered text: ', event.target.value);
    } else {
      this.noZeroValidation = false;
    }
  }
}
