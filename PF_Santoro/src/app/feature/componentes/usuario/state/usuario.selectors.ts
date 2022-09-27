import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuario from './usuario.reducer';

export const selectUsuarioState = createFeatureSelector<fromUsuario.UsuarioState>(
  fromUsuario.usuarioFeatureKey
);

export const selectCargandoUsuarios = createSelector(
  selectUsuarioState,
  (state: fromUsuario.UsuarioState) => state.cargando
);

export const selectUsuariosCargadosState = createSelector(
  selectUsuarioState,
  (state: fromUsuario.UsuarioState) => state.usuario
);