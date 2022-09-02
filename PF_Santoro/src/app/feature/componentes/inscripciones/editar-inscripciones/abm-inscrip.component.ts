import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripciones } from '../../../Model/Inscripciones';
import { InscripcionesService } from '../../../servicios/inscripciones.service';

@Component({
  selector: 'app-abm-inscrip',
  templateUrl: './abm-inscrip.component.html',
  styleUrls: ['./abm-inscrip.component.css']
})


export class AbmInscripComponent implements OnInit {
  formInscripcion: FormGroup;

  constructor ( 
  private formIns: FormBuilder,
 private InscripcionesService: InscripcionesService,
  private dialogRef: MatDialogRef<AbmInscripComponent>,
  @Inject(MAT_DIALOG_DATA) public element: Inscripciones) 
  

  {
  this.formInscripcion = formIns.group({
    id : new FormControl(element.id),
    NombreAlumno: new FormControl(element.NombreAlumno),
    ApellidoAlumno : new FormControl(element.ApellidoAlumno),
    NombreCurso : new FormControl(element.NombreCurso),
    comision : new FormControl(element.comision),
  })
  }


ngOnInit() {
}

guardar() {
  const i: Inscripciones = {
    id: this.element.id,
    NombreAlumno: this.formInscripcion.value.NombreAlumno,
    ApellidoAlumno: this.formInscripcion.value.NombreAlumno,
    NombreCurso: this.formInscripcion.value.NombreAlumno,
    comision: this.formInscripcion.value.NombreAlumno,
  }
  this.InscripcionesService.EditarInscripciones(i).subscribe((ins: Inscripciones) => {
    this.dialogRef.close(ins);  
  });
  }


cerrar() {
  this.dialogRef.close();
  }
}