import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from './servicios/auth.service';
import { map, Observable } from 'rxjs';
import { sesion } from '../feature/Model/sesion';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad  {

  constructor(
    private AuthService: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.AuthService.obtenerSesion().pipe(map((sesion: sesion) => {
          if(sesion.usuario?.admin){
            return true;
          }else{
            alert('El usuario no tiene permisos')
            this.router.navigate(['inicio']);
            return false;
          }
        })
      );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AuthService.obtenerSesion().pipe(map((sesion: sesion) => {
          if(sesion.usuario?.admin){
            return true;
          }else{
            alert('El usuario no tiene permisos');
            this.router.navigate(['inicio']);
            return false;
          }
        })
      );
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AuthService.obtenerSesion().pipe(
        map((sesion: sesion) => {
          if(sesion.usuario?.admin){
            return true;
          }else{
            alert('El usuario no tiene permisos');
            return false;
          }
        })
      );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AuthService.obtenerSesion().pipe(
        map((sesion: sesion) => {
          if(sesion.usuario?.admin){
            return true;
          }else{
            alert('El usuario no tiene permisos');
            this.router.navigate(['inicio']);
            return false;
          }
        })
      );
  }
  
}
