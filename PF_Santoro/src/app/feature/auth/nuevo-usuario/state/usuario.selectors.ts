import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuario from './usuario.reducer';
import { UsuarioState } from './usuario.reducer';

export const selectUsuarioState = createFeatureSelector<UsuarioState>(
  fromUsuario.usuarioFeatureKey
);

export const selectorCargandoUsuarios = createSelector(
  selectUsuarioState,
  (state: UsuarioState) => state.cargando
);

export const selectorListaUsuarios = createSelector(
  selectUsuarioState,
  (state: UsuarioState) => state.usuario
);