import { createAction, props } from '@ngrx/store';
import { Cursos } from 'src/app/feature/Model/Cursos';

export const loadCursoss = createAction(
  '[Cursos] Load Cursos',
);

export const cursosCargados = createAction(
  '[Cursos] Cursos Cargados',
  props<{cursos: Cursos[]} >()
  );
