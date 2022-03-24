import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-home',
  templateUrl: './feature-home.component.html',
  styleUrls: ['./feature-home.component.css'],
})
export class FeatureHomeComponent implements OnInit {
  testId;
  testRoutes = [{ name: 'john', id: 103 }, { name: 'hank', id: 203 }, { name: 'peter', id: 305 }, { name: 'carl', id: 506 }];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToRoute(route) {
    this.router.navigate(['../' + route]);
  }
}
