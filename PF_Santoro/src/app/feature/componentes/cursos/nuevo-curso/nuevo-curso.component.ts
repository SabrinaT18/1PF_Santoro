import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { CursosService } from '../../../servicios/cursos.service';
import { loadCursoss } from '../state/cursos.actions';
import { CursosState } from '../state/cursos.reducer';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private CursosService: CursosService ,
    private router: Router,
    private dialogRef: MatDialogRef<NuevoCursoComponent>,
    private store: Store<CursosState>,
    private snackBar: MatSnackBar
    )
    {
    this.formulario = new FormGroup({
    id  : new FormControl(),
    materia : new FormControl(),
    comision : new FormControl(),
    profesor: new FormControl(),
    fechaInicio: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

 cerrar() {
    this.dialogRef.close();
  }  
  
  guardar() {
    const c: Cursos = {
      idCurso: this.formulario.value.idCurso,
      materia: this.formulario.value.materia,
      comision:  this.formulario.value.comision,
      profesor:  this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
     }
     this.CursosService.AgregarCurso(c).subscribe((curso) => {
      this.store.dispatch(loadCursoss());
      this.snackBar.open(`${curso.materia} fue agregado exitosamente`, 'Ok', {duration: 3000});
      this.dialogRef.close();
    });
    }   


}

