import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InicioComponent, 
    ],
  imports: [
   CommonModule,
   SharedModule
  ]
})
export class CoreModule { }
