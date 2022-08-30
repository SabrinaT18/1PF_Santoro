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

    @Inject(MAT_DIALOG_DATA) public element: Cursos) 
    
    
    {
    this.formCursos = formCu.group({
      id: new FormControl(element.id),
      materia: new FormControl(element.materia),
      comision: new FormControl(element.comision),
      profesor: new FormControl(element.profesor),
      FechaInicio: new FormControl(element.FechaInicio),
    })


  }
  ngOnInit() {
  }

  guardar() {
    this.dialogRef.close(this.formCursos.value);
  }

  cerrar() {
    this.dialogRef.close();
  }

}
