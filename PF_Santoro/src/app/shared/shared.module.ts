import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatenarPipe } from './pipes/concatenar.pipe';
import { TitulosDirective } from './directivas/titulos.directive';
import { MaterialModule } from './material.module';
import { UsuarioComponent } from '../feature/usuario/usuario.component';



@NgModule({
  declarations: [
    ConcatenarPipe,
    TitulosDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ConcatenarPipe,
    TitulosDirective,
    MaterialModule,
  ]
})
export class SharedModule { }
