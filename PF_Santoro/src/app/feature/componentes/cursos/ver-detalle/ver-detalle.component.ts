import { Component, Inject, OnInit } from '@angular/core';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { selectorListaInscripcionesCurso } from '../../inscripciones/state/inscripciones.selectors';
import { cargarInscripcionesCurso } from '../../inscripciones/state/inscripciones.actions';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inscripciones } from 'src/app/feature/Model/Inscripciones';
import { InscripcionesService } from '../../../servicios/inscripciones.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent implements OnInit {
  inscripciones$!: Observable<Inscripciones[] | undefined>;

  constructor(
    private InscripcionesService: InscripcionesService,
    public dialogRef: MatDialogRef<VerDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cursos,
    private store: Store,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.inscripciones$ = this.store.select(selectorListaInscripcionesCurso);
    this.store.dispatch(cargarInscripcionesCurso({ idCurso: this.data.idCurso })
    )
    console.log(this.inscripciones$);
  }



  desinscribir(id: any) {
    this.InscripcionesService.eliminarInscripciones(id)
      .subscribe((inscripcion) => {
        this.store.dispatch(cargarInscripcionesCurso({ idCurso: this.data.idCurso })
        );
        this.snackBar.open(`La inscripción nº ${inscripcion.id} se eliminó`, 'OK', { duration: 3000 });
        this.cerrar();
      });
  }

  cerrar() {
    this.dialogRef.close();
  }
}

