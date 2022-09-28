import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CursosService } from 'src/app/feature/servicios/cursos.service';
import { cursosCargados, loadCursoss } from './cursos.actions';
import { Cursos } from 'src/app/feature/Model/Cursos';

@Injectable()
export class CursosEffects {
  loadCursoss$ = createEffect(() => this.actions$.pipe( 
      ofType(loadCursoss),
      mergeMap(() => this.cursosService.obtenerCursos().pipe(
        map((c: Cursos[]) => cursosCargados({cursos: c}))
    ))
  ));

  constructor(private actions$: Actions,
    private cursosService: CursosService
    ) {} 
   
}





