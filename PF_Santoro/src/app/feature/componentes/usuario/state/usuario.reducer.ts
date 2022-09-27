import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/feature/Model/Usuario';
import * as UsuarioActions from './usuario.actions';

export const usuarioFeatureKey = 'usuarios';

export interface UsuarioState {
cargando: boolean;
usuario?: Usuario[];
}

export const initialState: UsuarioState = {
  cargando: false
 };

export const reducer = createReducer(
  initialState,
  on(UsuarioActions.loadUsuarios, state => {
  return { ...state, cargando: true }
}),
on(UsuarioActions.usuariosCargados, (state, { usuarios }) => {
  return { ...state, cargando: false, usuario: usuarios };
})
);




