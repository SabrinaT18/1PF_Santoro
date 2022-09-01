import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatenarPipe } from './pipes/concatenar.pipe';
import { TitulosDirective } from './directivas/titulos.directive';
import { MaterialModule } from './material.module';
import { UsuarioComponent } from '../feature/usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';



@NgModule({
  declarations: [
    ConcatenarPipe,
    TitulosDirective,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  exports: [
    ConcatenarPipe,
    TitulosDirective,
    NavbarComponent,
    ToolbarComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,    
  ]
})
export class SharedModule { }
