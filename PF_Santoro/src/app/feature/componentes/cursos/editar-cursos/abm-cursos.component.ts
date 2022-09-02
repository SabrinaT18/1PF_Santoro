import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { CursosService } from '../../../servicios/cursos.service';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.css']
})
export class AbmCursosComponent implements OnInit {
  formCursos: FormGroup;

  constructor(
    private CursosService:CursosService,
    private formCu: FormBuilder,
    private dialogRef: MatDialogRef<AbmCursosComponent>,

    @Inject(MAT_DIALOG_DATA) private element: Cursos) 
    
    
    {
    this.formCursos = formCu.group({
      id: new FormControl(element.id),
      materia: new FormControl(element.materia),
      comision: new FormControl(element.comision),
      profesor: new FormControl(element.profesor),
      fechaInicio: new FormControl(element.fechaInicio),
    })


  }
  ngOnInit() {
  }

  guardar() {
    const c: Cursos = {
      id: this.element.id,
      materia: this.formCursos.value.materia,
      comision: this.formCursos.value.comision,
      profesor: this.formCursos.value.profesor,
      fechaInicio: this.formCursos.value.fechaInicio,
    }
    this.CursosService.EditarCurso(c).subscribe((curso: Cursos) => {
      this.dialogRef.close(curso);  
    });
    }
  
  
  cerrar() {
    this.dialogRef.close();
  }
}
