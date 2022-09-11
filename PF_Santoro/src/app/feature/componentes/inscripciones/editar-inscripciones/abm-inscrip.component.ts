import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Inscripciones } from '../../../Model/Inscripciones';
import { InscripcionesService } from '../../../servicios/inscripciones.service';
import { loadInsc } from '../state/inscripciones.actions';

@Component({
  selector: 'app-abm-inscrip',
  templateUrl: './abm-inscrip.component.html',
  styleUrls: ['./abm-inscrip.component.css']
})


export class AbmInscripComponent implements OnInit {
  formInscripcion: FormGroup;

  constructor ( 
 @Inject(MAT_DIALOG_DATA) public element: Inscripciones,
  private formIns: FormBuilder,
 private InscripcionesService: InscripcionesService,
  private dialogRef: MatDialogRef<AbmInscripComponent>,
  private snackBar: MatSnackBar,  private store: Store,
  )   {
  this.formInscripcion = formIns.group({
    id : new FormControl(element.id),
    nombreAlumno: new FormControl(element.nombreAlumno),
    ApellidoAlumno : new FormControl(element.ApellidoAlumno),
    idAlumno: new FormControl(element.idAlumno),
    NombreCurso : new FormControl(element.NombreCurso),
    comision : new FormControl(element.comision),
    idCurso: new FormControl(element.idCurso),
  })
  }


ngOnInit() {
}

guardar() {
  const i: Inscripciones = {
    id: this.element.id,
    nombreAlumno: this.formInscripcion.value.nombreAlumno,
    ApellidoAlumno: this.formInscripcion.value.ApellidoAlumno,
    idAlumno: this.formInscripcion.value.idAlumno,
    NombreCurso: this.formInscripcion.value.NombreCurso,
    comision: this.formInscripcion.value.comision,
    idCurso: this.formInscripcion.value.idCurso,
    }
  this.InscripcionesService.EditarInscripciones(i).subscribe((insc) => {
    this.store.dispatch(loadInsc());
    this.snackBar.open(`${insc.id} se editó correctamente`, 'Ok', { duration: 3000 });
    this.cerrar();
  });
  }


cerrar() {
  this.dialogRef.close();
  }
}