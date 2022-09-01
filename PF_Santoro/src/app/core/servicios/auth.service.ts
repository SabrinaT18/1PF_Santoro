import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { sesion } from 'src/app/feature/Model/sesion';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { UsuarioComponent } from 'src/app/feature/usuario/usuario.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sesionSubject!: BehaviorSubject<sesion>

  constructor() {
    const sesion: sesion = {
      sesionActiva: false
    }
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  IniciarSesion(usuario: Usuario) {
    const sesion: sesion = {
      sesionActiva: true,
      usuario: {
        id: usuario.id,
        username: usuario.username,
        email: usuario.email,
        password: usuario.password,
        admin: usuario.admin,
        canActivateChild: usuario.canActivateChild,
        canLoad: usuario.canLoad,
        canDeactivate: usuario.canDeactivate,
      }
    }
    this.sesionSubject.next(sesion);
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




