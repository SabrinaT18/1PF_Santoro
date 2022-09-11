import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './servicios/auth.service';
import { AdminGuard } from './admin.guard';
import { GuardAuthGuard } from './guard-auth.guard';
import * as fromSesion from './state/sesion.reducer';
import { StoreModule } from '@ngrx/store';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromSesion.sesionFeatureKey, fromSesion.reducer),
  ],

  providers: [
    AuthService,
    AdminGuard,
    GuardAuthGuard
  ],

})
export class CoreModule { }
