import { Feature3Service } from './feature3.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Test3Guard implements CanActivate {
  constructor(private feature3Service: Feature3Service, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if (this.feature3Service.validateActive()) {
      return this.feature3Service.validateActive();
    } else {
      return this.router.parseUrl('home');
    }
  }
}
