import { createAction, props } from '@ngrx/store';
import { Alumnos } from 'src/app/feature/Model/Alumnos';

export const loadAlumnos = createAction(
  '[Alumnos] Load Alumnos'
);

export const alumnosCargados = createAction(
  '[Alumnos] Alumnos Cargados',
  props<{alumnos: Alumnos[]} >()
  );


