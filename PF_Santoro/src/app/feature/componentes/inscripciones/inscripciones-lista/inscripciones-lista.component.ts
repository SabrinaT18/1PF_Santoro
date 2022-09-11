import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { selectUsuarioAdminState } from 'src/app/core/state/sesion.selectors';
import { Inscripciones } from 'src/app/feature/Model/Inscripciones';
import { InscripcionesService } from 'src/app/feature/servicios/inscripciones.service';
import { AbmInscripComponent } from '../editar-inscripciones/abm-inscrip.component';
import { NuevaInscrComponent } from '../nueva-inscr/nueva-inscr.component';
import { InsCargadas, loadInsc } from '../state/inscripciones.actions';
import { InscState } from '../state/inscripciones.reducer';
import { selectInsCargadosState } from '../state/inscripciones.selectors';

@Component({
  selector: 'app-inscripciones-lista',
  templateUrl: './inscripciones-lista.component.html',
  styleUrls: ['./inscripciones-lista.component.css']
})
export class InscripcionesListaComponent implements OnInit {
  insc$!: Observable<Inscripciones[]| undefined>;
  usuarioAdmin$!: Observable<Boolean| undefined>;

  data$!: Observable<Inscripciones[]>;

  InscripcionesSubscripcion!: Subscription;

  displayedColumns: string[] = ['id', 'apellidoAlumno', 'nombreAlumno','idAlumno',  'NombreCurso', 'comision', 'idCurso', 'acciones'];
  @ViewChild(MatTable) tabla!: MatTable<Inscripciones>;

  constructor(
  private dialog: MatDialog,
   private inscripcionesService: InscripcionesService,
   private store: Store<InscState>,
   private Authstore: Store<SesionState>,
   private snackBar: MatSnackBar,
   private router: Router,
  ) {
  }

  ngOnInit(): void { 
    this.insc$ = this.store.select(selectInsCargadosState);

    this.usuarioAdmin$ = this.Authstore.select(selectUsuarioAdminState);
  
    this.data$= this.inscripcionesService.obtenerInscripciones();
    this.InscripcionesSubscripcion = this.inscripcionesService.InscSubject.subscribe(
      (data) => {
        this.store.dispatch(InsCargadas({ Ins: data }));
      }
    );
  }

  ngOnDestroy(): void {
    this.InscripcionesSubscripcion.unsubscribe()
  }

  agregarInscripcion() {
    const dialogRef = this.dialog.open(NuevaInscrComponent, {
      width: '400px',
      data: this.insc$
    });
  }

  editarInscripcion(element: Inscripciones) {
    const dialogRef = this.dialog.open(AbmInscripComponent, {
      width: '400px',
      data: element
    });
  }


  eliminarInscripcion(id: string){
    this.inscripcionesService.eliminarInscripciones(id).subscribe((insc: Inscripciones) => {
      this.store.dispatch(loadInsc());
      this.snackBar.open(`${insc.id} se eliminó satisfactoriamente`, 'Ok', {duration: 3000});
    })
  }  


  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }
  
  
/*   filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  } */

}
