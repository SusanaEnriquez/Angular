import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css'],
})
export class HeaderNavigationComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() changeExampleEmmitter = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  changeExample(example: string){
    this.changeExampleEmmitter.emit(example);
  }

}
