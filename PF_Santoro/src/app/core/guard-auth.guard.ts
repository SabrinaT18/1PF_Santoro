import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../feature/Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if /* (this.) */ {
      this.router.navigate(['/inicio'])
      return true;
    }
    return false;
  }
}
