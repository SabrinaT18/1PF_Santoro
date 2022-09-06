import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
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
  
  constructor(private http: HttpClient) 
  {
    const sesion: sesion = {
      sesionActiva: false
    }
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  IniciarSesion(usuario: Usuario) {
  this.http.get<Usuario[]>(`${this.api}/usuario`).pipe(
    map((usuarios: Usuario[]) => {
   return usuarios.filter((u: Usuario) => u.email === usuario.email && u.password === usuario.password)[0];
  })
  ).subscribe  ((usuario: Usuario) => {
    if (usuario) {
      const sesion: sesion ={
      sesionActiva: true,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        username: usuario.username,
        password: usuario.password,
        admin: usuario.admin
      }
    } 
  this.sesionSubject.next(sesion);
 }else {
  alert ('usuario no encontrado');
 }
});
}

  cerrarSesion() {
    const sesion: sesion = {
      sesionActiva: false,
    };
    this.sesionSubject.next(sesion);
  }

  obtenerSesion() {
    return this.sesionSubject.asObservable();
  }
}




