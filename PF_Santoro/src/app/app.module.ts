import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClasesService } from './feature/servicios/clases.service';
import { AlumnosService } from './feature/servicios/alumnos.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { CursosService } from './feature/servicios/cursos.service';
import { RouterModule } from '@angular/router';
import { InscripcionesComponent } from './feature/componentes/inscripciones/inscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
     ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule,
    FeatureModule,
    SharedModule
    ],

  providers: [AlumnosService,
    ClasesService,
    CursosService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
