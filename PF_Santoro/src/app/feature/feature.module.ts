import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { VerDetalleComponent } from './componentes/cursos/ver-detalle/ver-detalle.component';


@NgModule({
  declarations: [
    LoginComponent,
    UsuarioComponent,
    ],
  
    imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
      ],

    providers: [
     ]



})
export class FeatureModule { }
