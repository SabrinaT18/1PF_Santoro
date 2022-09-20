import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InscripcionesService } from '../../../servicios/inscripciones.service';
import { Inscripciones } from '../../../Model/Inscripciones';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InscState } from '../state/inscripciones.reducer';
import { loadInsc } from '../state/inscripciones.actions';

@Component({
  selector: 'app-nueva-inscr',
  templateUrl: './nueva-inscr.component.html',
  styleUrls: ['./nueva-inscr.component.css']
})
export class NuevaInscrComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private InscripcionesService: InscripcionesService ,
    private router: Router,
    private dialogRef: MatDialogRef<NuevaInscrComponent>,
    private store: Store<InscState>,
    private snackBar: MatSnackBar
    )
    {
    this.formulario = new FormGroup({
    id  : new FormControl(),
    nombre: new FormControl(),
    apellido : new FormControl(),
    materia : new FormControl(),
    comision: new FormControl(),
    idAlumno: new FormControl(),
    idCurso: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  guardar(){
    const i: Inscripciones = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido:  this.formulario.value.apellido,
      idAlumno: this.formulario.value.idAlumno,
      materia:   this.formulario.value.materia,
      comision: this.formulario.value.comision,
      idCurso: this.formulario.value.idCurso,
    }
    this.InscripcionesService.agregarInscripciones(i).subscribe((Insc) => {
      this.store.dispatch(loadInsc());
      this.snackBar.open(`${Insc.id} fue agregado exitosamente`, 'Ok', {duration: 3000});
      this.cerrar();
    });
    }     
 
  cerrar() {
    this.dialogRef.close();
  }
}
