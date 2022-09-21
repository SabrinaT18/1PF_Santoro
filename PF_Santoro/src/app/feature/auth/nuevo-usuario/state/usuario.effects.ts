import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { exhaustMap, map } from 'rxjs/operators';
import * as UsuarioActions from './usuario.actions';
import { UsuariosService } from '../../../servicios/usuarios.service';

@Injectable()
export class UsuarioEffects {
  loadUsuarios$ = createEffect(() => 
     this.actions$.pipe( 
      ofType(UsuarioActions.loadUsuarios),
      exhaustMap(() =>
        this.usuariosService.obtenerUsuarios()
          .pipe(
            map((usuarios) => UsuarioActions.usuariosCargados({ usuarios }))
          )))
  );


  constructor(private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}
   
}
