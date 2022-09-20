import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inscripciones } from 'src/app/feature/Model/Inscripciones';
import { cargarInscripcionesAlumno } from '../../inscripciones/state/inscripciones.actions';
import { InscripcionesService } from '../../../servicios/inscripciones.service';
import { selectorListaInscripcionesAlumno } from '../../inscripciones/state/inscripciones.selectors';
import { Alumnos } from '../../../Model/Alumnos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
inscripciones$!: Observable<Inscripciones[]|undefined>;

  constructor(
    public dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos, 
    private InscripcionesService: InscripcionesService,
    private store: Store,
  ) {
    
  }
  
  ngOnInit(): void {   
    this.inscripciones$ = this.store.select(selectorListaInscripcionesAlumno); 
    this.store.dispatch(cargarInscripcionesAlumno({ idAlumno: this.data.idAlumno })
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
                cargarInscripcionesAlumno({ idAlumno: this.data.idAlumno })
              );
              this.dialogRef.close();
            });
        });
    };
  }
  formControl = new FormControl('', [Validators.required]);
  getError() {
    return this.formControl.hasError('required')? 'El campo es requerido' : '';
  }  

  cerrar() {
    this.dialogRef.close();
  }
}






