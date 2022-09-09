import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { sesion } from 'src/app/feature/Model/sesion';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { UsuarioComponent } from 'src/app/feature/usuario/usuario.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sesionSubject!: BehaviorSubject<sesion>
  private api: string = environment.api;

  constructor(
    private http: HttpClient,
    private router: Router) {
    }

  IniciarSesion(usuario: string, contrasena: string): Observable <Usuario> {
  return this.http.get<Usuario[]>(`${this.api}/usuario`).pipe(
      map((usuarios: Usuario[]) => {
      return   usuarios.filter((u: Usuario) => u.email === usuario && u.password === usuario)[0]
    })
    );
  }
  
  cerrarSesion() {

  }

  obtenerSesion() {
    return this.sesionSubject.asObservable();
  }


}



