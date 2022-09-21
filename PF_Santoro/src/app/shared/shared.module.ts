import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatenarPipe } from './pipes/concatenar.pipe';
import { TitulosDirective } from './directivas/titulos.directive';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { SiNoPipe } from './pipes/si-no.pipe';



@NgModule({
  declarations: [
    ConcatenarPipe,
    TitulosDirective,
    NavbarComponent,
    ToolbarComponent,
    FooterComponent,
    SiNoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],

  exports: [
    ConcatenarPipe,
    SiNoPipe,
    TitulosDirective,
    NavbarComponent,
    ToolbarComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FooterComponent
  ]
})
export class SharedModule { }
