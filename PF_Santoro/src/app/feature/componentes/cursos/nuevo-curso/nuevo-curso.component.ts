import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { CursosService } from '../../../servicios/cursos.service';

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

  guardar() {
    const c: Cursos = {
      id: this.formulario.value.id,
      materia: this.formulario.value.materia,
      comision:  this.formulario.value.comision,
      profesor:  this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
     }
     this.CursosService.AgregarCurso(c).subscribe((curso: Cursos) => {
      alert(`${curso.id}-${curso.materia} agregado correctamente`);
      this.dialogRef.close();
    });
    }     


  cerrar() {
    this.dialogRef.close();
  }
}

