import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripciones } from '../../../Model/Inscripciones';

@Component({
  selector: 'app-abm-inscrip',
  templateUrl: './abm-inscrip.component.html',
  styleUrls: ['./abm-inscrip.component.css']
})


export class AbmInscripComponent implements OnInit {
  formInscripcion: FormGroup;

  constructor ( 
  private formIns: FormBuilder,
 
  private dialogRef: MatDialogRef<AbmInscripComponent>,
  @Inject(MAT_DIALOG_DATA) public element: Inscripciones) 
  

  {
  this.formInscripcion = formIns.group({
    id : new FormControl(element.id),
    idAlumno : new FormControl(element.idAlumno),
    NombreAlumno: new FormControl(element.NombreAlumno),
    ApellidoAlumno : new FormControl(element.ApellidoAlumno),
    IdCurso: new FormControl(element.IdCurso),
    NombreCurso : new FormControl(element.NombreCurso),
    comision : new FormControl(element.comision),
  })
  }


ngOnInit() {
}

guardar() {
  this.dialogRef.close(this.formInscripcion.value);
}

cerrar() {
  this.dialogRef.close();
}
}