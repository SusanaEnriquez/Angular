import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Feature3Service {
  active = false;
  constructor() { }

  toggleActivation() {
    this.active = !this.active;
  }

  validateActive() {
    return !this.active;
  }
}
