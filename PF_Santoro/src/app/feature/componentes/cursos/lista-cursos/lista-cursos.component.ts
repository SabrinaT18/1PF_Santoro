import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { CursosService } from 'src/app/feature/servicios/cursos.service';
import { AbmCursosComponent } from '../editar-cursos/abm-cursos.component';
import { NuevoCursoComponent } from '../nuevo-curso/nuevo-curso.component';
import { CursosState } from '../state/cursos.reducer';
import { Store } from '@ngrx/store';
import { selectCursosCargadosState } from '../state/cursos.selectors';
import { cursosCargados, loadCursoss } from '../state/cursos.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { selectUsuarioActivoState } from '../../../../core/state/sesion.selectors';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Cursos[]| undefined>;
  data$!: Observable<Cursos[]>;
  cursosSubscription!: Subscription;

  displayedColumns: string[] = ['id', 'materia', 'comision', 'profesor', 'fechaInicio', 'acciones'];
  
 
constructor(
 private CursosService : CursosService,  
 private dialog: MatDialog,
 private store: Store<CursosState>,
 private snackBar: MatSnackBar,
 private router: Router,
 )
  {  }


ngOnInit(): void {
  this.cursos$ = this.store.select(selectCursosCargadosState);

  this.data$= this.CursosService.obtenerCursos();
  this.cursosSubscription = this.CursosService.cursoSubject.subscribe(
    (data) => {
      this.store.dispatch(cursosCargados({ cursos: data }));
    }
  );
}

ngOnDestroy(): void {
  this.cursosSubscription.unsubscribe();
}
  
AgregarCurso() {
 const dialogRef = this.dialog.open(NuevoCursoComponent, {
      width: '400px',
      data:this.cursos$
    });
}

  editarCurso(curso: Cursos) {
    const dialogRef = this.dialog.open(AbmCursosComponent, {
      width: '400px',
      data: curso
    });  
  }

  eliminarCurso(id: string){
    this.CursosService.BorrarCurso(id).subscribe((curso: Cursos) => {
      this.store.dispatch(loadCursoss());
      this.snackBar.open(`${curso.materia} fue eliminado exitosamente`, 'Ok', {duration: 3000});
    })
      }

 redireccionar(ruta: string) {
  this.router.navigate([ruta]);
}

}
