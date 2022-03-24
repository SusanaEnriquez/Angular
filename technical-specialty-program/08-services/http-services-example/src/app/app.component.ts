import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data$;

  constructor(private StarWarsService: StarWarsService) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    //  Using Async Pipe
    this.data$ = this.StarWarsService.getPeople();

    // Without async Pipe
    // this.StarWarsService.getPeople().subscribe(response => {
    //   this.data$ = response;
    // });
  }
  getMockPeople() {
    this.data$ = this.StarWarsService.getMockPeople();
  }

  getPeopleById(id: number) {
    this.data$ = this.StarWarsService.getPeopleById(id + 1);
  }

  getSpecies() {
    this.data$ = this.StarWarsService.getSpecies();
  }

  getStarships() {
    this.data$ = this.StarWarsService.getStarships();
  }

  onPost(name: string) {
    this.StarWarsService.postPeople(name).subscribe(response => {
      console.log(response);
    });
  }
}
