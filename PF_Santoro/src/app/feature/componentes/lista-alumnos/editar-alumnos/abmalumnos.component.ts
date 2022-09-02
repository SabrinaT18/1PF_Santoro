import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from '../../../Model/Alumnos';
import { AlumnosService } from '../../../servicios/alumnos.service';

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
    private AlumnosService: AlumnosService,

    @Inject(MAT_DIALOG_DATA) public elemento: Alumnos) 
    
    {
    this.formulario = fb.group({
      id: new FormControl(elemento.id),
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
    const a: Alumnos = {
      id: this.elemento.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      fechaNacimiento: this.formulario.value.fechaNacimiento,
      nota: this.formulario.value.nota,
      estado: this.formulario.value.estado,
    }
    this.AlumnosService.EditarAlumno(a).subscribe((alumno: Alumnos) => {
      this.dialogRef.close(alumno);  
    });
  }

  cerrar() {
    this.dialogRef.close();
  }

}
