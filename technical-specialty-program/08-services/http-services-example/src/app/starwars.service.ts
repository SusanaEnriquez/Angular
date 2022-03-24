import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StarWarsService {
  URL = 'https://swapi.co/api';
  fighters: Array<object> = [
    { name: 'Conor McGregor', wins: 21, losses: 3 },
    { name: 'Tony Ferguson', wins: 23, losses: 3 },
    { name: 'Max Holloway', wins: 19, losses: 3 },
    { name: 'Jon Jones', wins: 22, losses: 1 },
    { name: 'Daniel Cormier', wins: 21, losses: 1 },
    { name: 'Brock Lesnar', wins: 5, losses: 3 },
  ];

  constructor(private httpClient: HttpClient) {}

  getPeople() {
    return this.httpClient
      .get(`${this.URL}/people`)
      .pipe(map((response: Response) => response['results']));
  }

  getMockPeople() {
    return of(this.fighters);
  }

  getPeopleById(id: number) {
    return this.httpClient
      .get(`${this.URL}/people/${id}`)
      .pipe(map((response: Response) => response['results']));
  }

  getSpecies() {
    return this.httpClient
      .get(`${this.URL}/species`)
      .pipe(map((response: Response) => response['results']));
  }

  getStarships() {
    return this.httpClient
      .get(`${this.URL}/starships`)
      .pipe(map((response: Response) => response['results']));
  }

  postPeople(name: string) {
    const headers = new HttpHeaders({
      test: 'STW',
    });

    const params = new HttpParams().set('Fany', 'Fancy');
    return this.httpClient
      .post('https://httpbin.org/post', { name }, { headers, params })
      .pipe(map((response: Response) => response));
  }
}
