import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  logueado!: any;

  usuarioSubject = new Subject<any>();
  url = environment.URLapi;

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<any> {
      return this.http.get(`${this.url}/usuario`);
    }
  

agregarUsuario(usuario: any) {
    return this.http
      .post(`${this.url}/usuario`, usuario)
      .pipe(
        tap({
          next: () => this.usuarioSubject.next(usuario),
        })
      );
  }

  editarUsuario(usuario: any) {
    return this.http
      .put(`${this.url}/usuario/${usuario.id}`,
        usuario
      )
      .pipe(
        tap({
          next: () => this.usuarioSubject.next(usuario),
        })
      );
  }

  eliminarUsuario(usuario: any) {
    return this.http
      .delete(
        `${this.url}/usuario/${usuario.idUsuario}`,
        usuario
      )
      .pipe(
        tap({
          next: () => this.usuarioSubject.next(usuario),
        })
      );
  }
}
