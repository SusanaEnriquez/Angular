import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  simpleTestText = 'this is a simple property bind test';
  imgsrc = 'https://media1.giphy.com/media/jkSvCVEXWlOla/giphy.gif';
  imgStyle = 'height:40px';
  isDisabled = true;
  headerColor = 'blue';
  headingHTML = '<b>I love this dog<b>';
  isHeaderHidden = false;
  sendStatus = 'enabled';
  cancelCount = 10;
  classes = 'row  excellentClass';
  counter = 50;

  constructor() {}

  ngOnInit() {}

  nextIsDisabled() {
    return false;
  }
}
