import { createAction, props } from '@ngrx/store';
import { Inscripciones } from 'src/app/feature/Model/Inscripciones';

export const loadInsc = createAction(
  '[Inscripciones] Load Inscripciones'
);

export const InsCargadas = createAction(
  '[Inscripciones] Inscripciones Cargadas',
  props<{Ins: Inscripciones[]} >()
  );




