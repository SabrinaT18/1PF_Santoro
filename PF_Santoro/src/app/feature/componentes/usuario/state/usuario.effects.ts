import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { loadUsuarios, usuariosCargados } from './usuario.actions';

@Injectable()
export class UsuarioEffects {
  loadUsuarios$ = createEffect(() => 
     this.actions$.pipe(ofType(loadUsuarios),
     mergeMap(() => this.usuariosService.obtenerUsuarios().pipe(
       map((u: Usuario[]) => usuariosCargados({usuarios: u}))
   ))
 ));


  constructor(private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}
   
}
