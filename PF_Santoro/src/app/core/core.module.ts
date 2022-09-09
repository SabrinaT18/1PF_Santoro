import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './servicios/auth.service';
import { AdminGuard } from './admin.guard';
import { GuardAuthGuard } from './guard-auth.guard';



@NgModule({
  declarations: [
    InicioComponent, 
    ],
  imports: [
   CommonModule,
   SharedModule,
  ],

  providers: [
   AuthService,
   AdminGuard,
   GuardAuthGuard
  ],

})
export class CoreModule { }
