import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InscripcionesService } from '../../../servicios/inscripciones.service';
import { Inscripciones } from '../../../Model/Inscripciones';

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
    )
    {
    this.formulario = new FormGroup({
    id  : new FormControl(),
    idAlumno  : new FormControl(),
    NombreAlumno: new FormControl(),
    ApellidoAlumno : new FormControl(),
    IdCurso: new FormControl(),
    NombreCurso : new FormControl(),
    comision: new FormControl(),
    profesor: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  agregarInscripcion(){
    const Ins: Inscripciones = {
      id: this.formulario.value.id,
      idAlumno: this.formulario.value.idAlumno,
      NombreAlumno: this.formulario.value.NombreAlumno,
      ApellidoAlumno:  this.formulario.value.ApellidoAlumno,
      IdCurso:  this.formulario.value.IdCurso,
      NombreCurso:   this.formulario.value.NombreCurso,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
    }
    this.InscripcionesService.inscripciones.push()
  }

  guardar() {
    this.dialogRef.close(this.formulario.value);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
