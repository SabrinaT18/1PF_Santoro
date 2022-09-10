import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material.module';
import { FeatureModule } from './feature/feature.module';
import { InscripcionesModule } from './feature/componentes/inscripciones/inscripciones.module';
import { AlumnosModule } from './feature/componentes/lista-alumnos/alumnos.module';
import { CursosModule } from './feature/componentes/cursos/cursos.module';
import { ClasesModule } from './feature/componentes/clases/clases.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    CoreModule, 
    FeatureModule,
    InscripcionesModule,
    AlumnosModule,
    CursosModule,
    ClasesModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],



  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
