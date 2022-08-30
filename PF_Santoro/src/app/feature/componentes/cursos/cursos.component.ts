import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { map, Observable, Subscription } from 'rxjs';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { CursosService } from '../../servicios/cursos.service';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  cursos: any = [];

  cursosObservable$!: Observable<any>;
  cursoSuscripcion!: Subscription;


  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'materia', 'comision', 'profesor', 'FechaInicio', 'acciones'];
  
  @ViewChild(MatTable) tabla!: MatTable<Cursos>;
  

constructor(
 private dialog: MatDialog,
 private CursosService : CursosService,   
  ) { 
    this.cursosObservable$ = this.CursosService.obtenerObservableCursos()

    this.cursoSuscripcion = this.cursosObservable$.subscribe((cursos) => {
        this.dataSource.data = cursos
        console.log(cursos);
      });
  }


ngOnInit(): void {
  
}

ngOnDestroy(): void {
  this.cursoSuscripcion.unsubscribe();
}

AgregarCurso() {
    const dialogRef = this.dialog.open(NuevoCursoComponent, {
      width: '400px',
      data: this.cursos
    });
    dialogRef.afterClosed().subscribe(resultado => {
      this.CursosService.cursos.push(resultado);
      this.tabla.renderRows();
    })
  }

  editarCurso(element: Cursos) {
    const dialogRef = this.dialog.open(AbmCursosComponent, {
      width: '400px',
      data: element
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        const item = this.dataSource.data.find(cursos => element.id === resultado.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }


  eliminarCurso(elemento: Cursos) {
    this.dataSource.data = this.dataSource.data.filter((cursos: Cursos) => cursos.id != elemento.id);
  }

}


 




