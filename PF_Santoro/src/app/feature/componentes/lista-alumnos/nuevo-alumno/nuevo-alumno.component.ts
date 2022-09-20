import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Alumnos } from 'src/app/feature/Model/Alumnos';
import { AlumnosService } from '../../../servicios/alumnos.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { alumnosState } from '../state/alumnos.reducer';
import { loadAlumnos } from '../state/alumnos.actions';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private AlumnosService: AlumnosService ,
    private router: Router,
    private dialogRef: MatDialogRef<NuevoAlumnoComponent>,
    private store: Store<alumnosState>,
    private snackBar: MatSnackBar
    )
    {
    this.formulario = new FormGroup({
      idAlumno: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      email: new FormControl(),
      fechaNacimiento: new FormControl(),
      nota: new FormControl(),
      estado: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  guardar(){
    const a: Alumnos = {
      idAlumno: this.formulario.value.idAlumno,
      apellido: this.formulario.value.apellido,
      nombre:  this.formulario.value.nombre,
      email:  this.formulario.value.email,
      fechaNacimiento:   this.formulario.value.fechaNacimiento,
      nota: this.formulario.value.nota,
      estado: this.formulario.value.estado,
    }
    this.AlumnosService.agregarAlumno(a).subscribe((alumno) => {
      this.store.dispatch(loadAlumnos());
      this.snackBar.open(`${alumno.nombre}-${alumno.apellido} fue agregado exitosamente`, 'Ok', {duration: 3000});
      this.dialogRef.close();
    });
      }
  

  cerrar() {
    this.dialogRef.close();
  }

}



