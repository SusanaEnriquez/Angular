import { UnaryOperator } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  post:any[] = [];

  constructor(private _service:InfoService){ 
    this.post = _service.getPost();
  }
  
  ngOnInit(): void {
  }
}


