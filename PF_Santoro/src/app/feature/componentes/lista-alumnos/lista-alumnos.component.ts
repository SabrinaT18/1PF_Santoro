import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Alumnos } from '../../Model/Alumnos';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Observable, Subscription } from 'rxjs';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ABMalumnosComponent } from './editar-alumnos/abmalumnos.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { selectUsuarioAdminState } from 'src/app/core/state/sesion.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { alumnosState } from './state/alumnos.reducer';
import { selectAlumnosCargadosState } from './state/alumnos.selectors';
import { alumnosCargados, loadAlumnos } from './state/alumnos.actions';

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

  displayedColumns: string[] = ['id', 'apellido', 'nombre', 'email', 'fechaNacimiento', 'nota', 'estado', 'AccionesUser' , 'AccionesAdmin'];
    @ViewChild(MatTable) tabla!: MatTable<Alumnos>;

  nota = 6.5;
  hoy = Date.now();


  constructor(
    private AlumnosService: AlumnosService,
    private dialog: MatDialog,
    private store: Store<alumnosState>,
    private Authstore: Store<SesionState>,
    private snackBar: MatSnackBar,
    private router: Router,
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
      this.snackBar.open(`${alumno.nombre} ${alumno.apellido} fue eliminado exitosamente`, 'Ok', {duration: 3000});
    })
   
  }
  
       
    redireccionar(ruta: string) {
     this.router.navigate([ruta]);
   }

/*      filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.data$.pipe(tap(valorObtenido.trim().toLocaleLowerCase();
     )} 
     */
  }



