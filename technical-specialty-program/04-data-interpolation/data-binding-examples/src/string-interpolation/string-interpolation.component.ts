import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent implements OnInit {
  name = 'Maya Hawke';
  age = 25;
  awesomeAdjectives = {
    1: 'radtastic!',
    2: 'mathematical!',
    3: 'coolio!',
  };
  imgsrc = 'https://media.giphy.com/media/1kkxWqT5nvLXupUTwK/giphy.gif';
  imgAltDesc = 'Hard Working Doggo';
  isThisTheRealLife = false;

  constructor() {}

  ngOnInit() {}

  getIncredibleValue() {
    return 'incredible!';
  }

  getCalculatedValue(multiplier) {
    return multiplier * 100;
  }

  getParamValue(index) {
    return this.awesomeAdjectives[index];
  }
}
