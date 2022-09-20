import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Alumnos } from '../../../Model/Alumnos';
import { AlumnosService } from '../../../servicios/alumnos.service';
import { loadAlumnos } from '../state/alumnos.actions';

@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class ABMalumnosComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public elemento: Alumnos,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ABMalumnosComponent>,
    private AlumnosService: AlumnosService,
    private store: Store,
    private snackBar: MatSnackBar,
    ) 
    
    {
    this.formulario = fb.group({
      idAlumno: new FormControl(elemento.idAlumno),
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
  
  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    const a: Alumnos = {
      idAlumno: this.elemento.idAlumno,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      fechaNacimiento: this.formulario.value.fechaNacimiento,
      nota: this.formulario.value.nota,
      estado: this.formulario.value.estado,
    }
    this.AlumnosService.EditarAlumno(a).subscribe((alumno) => {
      this.store.dispatch(loadAlumnos());
      this.snackBar.open(`${alumno.nombre}-${alumno.apellido} fue editado correctamente`, 'Ok', { duration: 3000 });
      this.cerrar();
    });
  }
  }




