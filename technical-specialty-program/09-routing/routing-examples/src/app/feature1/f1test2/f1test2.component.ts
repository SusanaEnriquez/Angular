import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f1test2',
  templateUrl: './f1test2.component.html',
  styleUrls: ['./f1test2.component.css'],
})
export class F1test2Component implements OnInit {
  param1: string;
  param2: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.param1 = params['param1'];
      this.param2 = params['param2'];
    });
  }
}
