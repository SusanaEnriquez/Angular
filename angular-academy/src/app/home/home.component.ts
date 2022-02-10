import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post:any[] = [];

  constructor(private _service:InfoService){ 
    this.post = _service.getPost();
  }

  ngOnInit(): void {
  }

}
