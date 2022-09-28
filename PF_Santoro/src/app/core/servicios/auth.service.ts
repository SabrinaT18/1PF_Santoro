import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { sesion } from 'src/app/feature/Model/sesion';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { environment } from 'src/environments/environment';
import { SesionState } from '../state/sesion.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sesionSubject!: BehaviorSubject<sesion>
  private api: string = environment.URLapi;
  store!: Store<SesionState>;

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  IniciarSesion(email: string, password: string): Observable<Usuario> {
    return this.http.get<Usuario[]>(`${this.api}/usuario`).pipe(
      map((usuario: Usuario[]) => {
        return usuario.filter((u: Usuario) => u.email === email && u.password === password)[0]
      })
    );
  }

  obtenerSesion() {
    return this.sesionSubject.asObservable();
  }

  cerrarSesion() {
    this.router.navigate(['auth/login']);
  }


}



