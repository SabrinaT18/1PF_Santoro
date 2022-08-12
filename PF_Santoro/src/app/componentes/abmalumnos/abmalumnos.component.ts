import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class ABMalumnosComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ABMalumnosComponent>,

    @Inject(MAT_DIALOG_DATA) public elemento: Alumno) {
    this.formulario = fb.group({
      nombre: new FormControl(elemento.nombre),
      apellido: new FormControl(elemento.apellido),
      email: new FormControl(elemento.email),
      fechaNacimiento: new FormControl(elemento.fechaNacimiento),
      nota: new FormControl(elemento.nota),
      estado: new FormControl(elemento.estado)

    })
  }
  ngOnInit() {
  }

  guardar() {
    this.dialogRef.close(this.formulario.value);
  }

  cerrar() {
    this.dialogRef.close();
  }

}
