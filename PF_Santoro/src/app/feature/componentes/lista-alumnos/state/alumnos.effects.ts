import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';
import * as AlumnosActions from './alumnos.actions';
import { AlumnosService } from '../../../servicios/alumnos.service';
import { Alumnos } from 'src/app/feature/Model/Alumnos';
import { loadAlumnos } from './alumnos.actions';

@Injectable()
export class AlumnosEffects {

  loadAlumnos$ = createEffect(() => this.actions$.pipe(ofType(loadAlumnos),
      mergeMap(() => this.AlumnosService.obtenerAlumnos().pipe(
        map((a: Alumnos[]) => AlumnosActions.alumnosCargados({alumnos: a}))
    ))
  ));

  constructor(private actions$: Actions,
    private AlumnosService: AlumnosService
    ) {} 
  
  }