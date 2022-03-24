import { Feature3Service } from './../feature3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature3-home',
  templateUrl: './feature3-home.component.html',
  styleUrls: ['./feature3-home.component.css'],
})
export class Feature3HomeComponent implements OnInit {
  guardIsActive = this.feature3Service.active;
  constructor(private feature3Service: Feature3Service) {}

  ngOnInit() {}

  toggleActive() {
    this.feature3Service.toggleActivation();
    this.guardIsActive = this.feature3Service.active;
  }
}
