import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ABMalumnosComponent } from './componentes/abmalumnos/abmalumnos.component';
import { NavbarComponent } from './componentes/layout/navbar/navbar.component';
import { ContenidoComponent } from './componentes/layout/contenido/contenido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './componentes/layout/toolbar/toolbar.component';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConcatenarPipe } from './pipes/concatenar.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TitulosDirective } from './directivas/titulos.directive';
import { ClasesComponent } from './componentes/clases/clases.component';
import { ClasesService } from './servicios/clases.service';
import { AlumnosService } from './servicios/alumnos.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ABMalumnosComponent,
    NavbarComponent,
    ToolbarComponent,
    ContenidoComponent,
    ConcatenarPipe,
    TitulosDirective,
    ClasesComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],

  providers: [AlumnosService,
    ClasesService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
