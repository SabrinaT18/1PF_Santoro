import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
usuarioSubject = new Subject<any>();
url = environment.URLapi;

  constructor(private http: HttpClient) {}

obtenerUsuarios(): Observable<any> {
      return this.http.get(`${this.url}/usuario`);
    }
  
agregarUsuario(usuario: any) {
    return this.http.post(`${this.url}/usuario`, usuario)
      .pipe(tap({next: () => this.usuarioSubject.next(usuario),
        })
      );
  }

  eliminarUsuario(id: number) {
    return this.http.delete<Usuario>(`${this.url}/usuario/${id}`).pipe(
      catchError(this.manejarError)
    );
  }


  editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/usuario/${usuario.id}`, usuario).pipe(
      catchError(this.manejarError)
    );
    }  

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.status, error.message)
      alert('Hubo un error de comunicacion, intente de nuevo')
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}

