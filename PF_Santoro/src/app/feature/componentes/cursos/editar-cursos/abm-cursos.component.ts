import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { CursosService } from '../../../servicios/cursos.service';
import { loadCursoss } from '../state/cursos.actions';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.css']
})
export class AbmCursosComponent implements OnInit {
  formCursos: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public element: Cursos ,
  private dialogRef: MatDialogRef<AbmCursosComponent>,
  private CursosService: CursosService,
  private store: Store,
  private formCu: FormBuilder,
  private snackBar: MatSnackBar,
  )
{   
  this.formCursos = formCu.group({
    id: new FormControl(element.id),
    materia: new FormControl(element.materia),
    comision: new FormControl(element.comision),
    profesor: new FormControl(element.profesor),
    fechaInicio: new FormControl(element.fechaInicio),
  })
}

ngOnInit() {}

cerrarDialog() {
  this.dialogRef.close();
}

guardar() {
  const c: Cursos = {
    id: this.element.id,
    materia: this.formCursos.value.materia,
    comision: this.formCursos.value.comision,
    profesor: this.formCursos.value.profesor,
    fechaInicio: this.formCursos.value.fechaInicio,
  }
  this.CursosService.EditarCurso(c).subscribe((curso) => {
    this.store.dispatch(loadCursoss());
    this.snackBar.open(`${curso.materia} fue editado correctamente`, 'Ok', { duration: 3000 });
    this.cerrarDialog();
  });
}
    

}
