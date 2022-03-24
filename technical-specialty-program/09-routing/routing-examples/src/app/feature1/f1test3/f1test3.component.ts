import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
export interface ExampleData {
  url: any;
  path: string;
  data: {
    somethingCool?: string;
    dogimgurl?: string;
    description?: string;
  };
}

@Component({
  selector: 'app-f1test3',
  templateUrl: './f1test3.component.html',
  styleUrls: ['./f1test3.component.css'],
})
export class F1test3Component implements OnInit {
  radData: ExampleData = {
    url: {},
    path: '',
    data: {},
  };
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.url.subscribe(url => {
      console.log(url[0].path);
      this.radData.url = url;
    });

    this.route.url.subscribe(url => {
      console.log(url[0].path);
      this.radData.path = url[0].path;
    });

    this.route.data.subscribe(data => {
      console.log(data);
      this.radData.data = data;
    });
    console.log(this.router.config);
  }
}
