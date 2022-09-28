import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inscripciones } from 'src/app/feature/Model/Inscripciones';
import { cargarInscripcionesAlumno } from '../../inscripciones/state/inscripciones.actions';
import { InscripcionesService } from '../../../servicios/inscripciones.service';
import { selectorListaInscripcionesAlumno } from '../../inscripciones/state/inscripciones.selectors';
import { Alumnos } from '../../../Model/Alumnos';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  inscripciones$!: Observable<Inscripciones[] | undefined>;

  constructor(
    private InscripcionesService: InscripcionesService,
    public dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos,
    private store: Store,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.inscripciones$ = this.store.select(selectorListaInscripcionesAlumno);
    this.store.dispatch(cargarInscripcionesAlumno({ idAlumno: this.data.idAlumno })
    )
    console.log(this.inscripciones$);
  }

  desinscribir(id: any) {
    this.InscripcionesService.eliminarInscripciones(id)
      .subscribe((inscripcion) => {
        this.store.dispatch(cargarInscripcionesAlumno({ idAlumno: this.data.idAlumno })
        );
        this.snackBar.open(`La inscripción nº ${inscripcion.id} se eliminó`, 'OK', { duration: 3000 });
        this.cerrar();
      });
  }

  cerrar() {
    this.dialogRef.close();
  }
}






