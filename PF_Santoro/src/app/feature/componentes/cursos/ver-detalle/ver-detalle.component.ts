import { Component, Inject, OnInit } from '@angular/core';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { selectorListaInscripcionesAlumno, selectorListaInscripcionesCurso } from '../../inscripciones/state/inscripciones.selectors';
import { cargarInscripcionesCurso } from '../../inscripciones/state/inscripciones.actions';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inscripciones } from 'src/app/feature/Model/Inscripciones';
import { InscripcionesService } from '../../../servicios/inscripciones.service';

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
  ) {

  }

  ngOnInit(): void {
    this.inscripciones$ = this.store.select(selectorListaInscripcionesCurso);
    this.store.dispatch(cargarInscripcionesCurso({ idCurso: this.data.idCurso })
    )
    console.log(this.inscripciones$);
  }


  desinscribir(idAlumno: any, idCurso: any) {
    if (idAlumno !== undefined && idCurso !== undefined) {
      this.InscripcionesService.desinscribirAlumnoCurso(idAlumno, idCurso)
        .subscribe((res) => {
          const id = res.idInscripcion;
          this.InscripcionesService.eliminarInscripciones(res)
            .subscribe((resp: any) => {
              this.store.dispatch(
                cargarInscripcionesCurso({ idCurso: this.data.idCurso })
              );
              this.dialogRef.close();
            });
        });
    };
  }
  formControl = new FormControl('', [Validators.required]);
  getError() {
    return this.formControl.hasError('required') ? 'El campo es requerido' : '';
  }

  cerrar() {
    this.dialogRef.close();
  }
}

