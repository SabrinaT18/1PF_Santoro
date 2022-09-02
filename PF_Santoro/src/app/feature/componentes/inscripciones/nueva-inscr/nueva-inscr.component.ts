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
    NombreAlumno: new FormControl(),
    ApellidoAlumno : new FormControl(),
    NombreCurso : new FormControl(),
    comision: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  guardar(){
    const i: Inscripciones = {
      id: this.formulario.value.id,
      NombreAlumno: this.formulario.value.NombreAlumno,
      ApellidoAlumno:  this.formulario.value.ApellidoAlumno,
      NombreCurso:   this.formulario.value.NombreCurso,
      comision: this.formulario.value.comision,
    }
    this.InscripcionesService.agregarInscripciones(i).subscribe((Ins: Inscripciones) => {
      alert(`Inscripción nº: ${Ins.id} registrada correctamente`);
      this.dialogRef.close();
    });
    }     
 
  cerrar() {
    this.dialogRef.close();
  }
}
