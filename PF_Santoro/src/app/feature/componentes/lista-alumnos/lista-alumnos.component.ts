import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Alumnos } from '../../Model/Alumnos';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Observable, Subscription } from 'rxjs';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ABMalumnosComponent } from './editar-alumnos/abmalumnos.component';
import { Store } from '@ngrx/store';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { selectUsuarioAdminState } from 'src/app/core/state/sesion.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { alumnosState } from './state/alumnos.reducer';
import { selectAlumnosCargadosState } from './state/alumnos.selectors';
import { alumnosCargados, loadAlumnos } from './state/alumnos.actions';
import { DetalleComponent } from './detalle/detalle.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})


export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<Alumnos[]| undefined>;
  alumnoSubscripcion!: Subscription;
  data$!: Observable<Alumnos[]>;

  usuarioAdmin$!: Observable<Boolean| undefined>;

  displayedColumns: string[] = ['idAlumno', 'apellido', 'nombre', 'email', 'fechaNacimiento', 'nota', 'estado', 'Acciones'];
  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;

  nota = 6.5;
  hoy = Date.now();


  constructor(
    private AlumnosService: AlumnosService,
    private dialog: MatDialog,
    private store: Store<alumnosState>,
    private Authstore: Store<SesionState>,
    private snackBar: MatSnackBar,
      ) {

    }
  

  ngOnInit(): void {     
  this.alumnos$ = this.store.select(selectAlumnosCargadosState);

  this.usuarioAdmin$ = this.Authstore.select(selectUsuarioAdminState);

  this.data$= this.AlumnosService.obtenerAlumnos();
  this.alumnoSubscripcion = this.AlumnosService.alumnoSubject.subscribe(
    (data) => {
      this.store.dispatch(alumnosCargados({ alumnos: data }));
    }
  );

}

  ngOnDestroy(): void {
    this.alumnoSubscripcion.unsubscribe()
  }

  agregarAlumno() {
    const dialogRef = this.dialog.open(NuevoAlumnoComponent,  {
      width: '400px',
      data: this.alumnos$
    });
    }


  editarAlumno(element: Alumnos) {
    const dialogRef = this.dialog.open(ABMalumnosComponent, {
      width: '400px',
      data: element
    });
   }

 
  eliminarAlumno(id: string) {
    this.AlumnosService.eliminarAlumno(id).subscribe((alumno: Alumnos) => {
      this.store.dispatch(loadAlumnos());
      this.snackBar.open(`${alumno.nombre} - ${alumno.apellido} fue eliminado exitosamente`, 'Ok', {duration: 3000});
    })
   
  }
  
  verDetalle (alumno: Alumnos ) {
    const dialogRef = this.dialog.open(DetalleComponent, {
      width: '400px',
      data: alumno
    });  
  }
       
  

  }



