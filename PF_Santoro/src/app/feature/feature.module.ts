import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { adminComponent } from './dash-admin/admin.component';
import { UsuarioRoutingModule } from './dash-admin/usuario-routing.module';
import { VerDetalleComponent } from './componentes/cursos/ver-detalle/ver-detalle.component';
import { NuevoUsuarioComponent } from './auth/nuevo-usuario/nuevo-usuario.component';
import { EffectsModule } from '@ngrx/effects';
import { UsuarioEffects } from './auth/nuevo-usuario/state/usuario.effects';
import * as fromUsuario from './auth/nuevo-usuario/state/usuario.reducer';
import { StoreModule } from '@ngrx/store';
import { EditUsuarioComponent } from './componentes/usuario/edit-usuario/edit-usuario.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

@NgModule({
  declarations: [
    LoginComponent,
    NuevoUsuarioComponent,
    EditUsuarioComponent,
    adminComponent,
    UsuarioComponent
    ],
  
    imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromUsuario.usuarioFeatureKey, fromUsuario.usuarioReducer),
    EffectsModule.forFeature([UsuarioEffects]),
      ],

    providers: [
     ]



})
export class FeatureModule { }
