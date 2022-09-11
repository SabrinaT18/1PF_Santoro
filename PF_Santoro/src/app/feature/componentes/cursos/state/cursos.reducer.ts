import { Action, createReducer, on } from '@ngrx/store';
import * as CursosActions from './cursos.actions';
import { Cursos } from '../../../Model/Cursos';
import { cursosCargados } from './cursos.actions';

export const cursosFeatureKey = 'cursos';

export interface CursosState {
  cargando: boolean;
  cursos?: Cursos[];
}

export const initialState: CursosState = {
  cargando: false
};

export const reducer = createReducer(
  initialState,
  on(CursosActions.loadCursoss, state =>   {
      return { ...state, cargando: true }
    }),
  on(CursosActions.cursosCargados, (state, { cursos }) => {
      return { ...state, cargando: false, cursos: cursos };
    })
    );






