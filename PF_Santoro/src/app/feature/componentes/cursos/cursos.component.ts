import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { map, Observable, Subscription } from 'rxjs';
import { Cursos } from 'src/app/Model/Cursos';
import { CursosService } from '../../../servicios/cursos.service';
import { AbmCursosComponent } from '../../formularios abm/abm-cursos/abm-cursos.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  cursos: any = [];

  cursosObservable$!: Observable<any>;
  cursoSuscripcion!: Subscription;

  @ViewChild(MatTable) tabla!: MatTable<Cursos>;
  

constructor(
 private dialog: MatDialog,
 private CursosService : CursosService,   
  ) { 
  
    this.CursosService.obtenerObservableCursos().subscribe((cursos) => {
      console.log('desde el observable: ', cursos);
      this.cursos = cursos;
    });

    this.cursoSuscripcion = this.CursosService.obtenerObservableCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
    this.cursosObservable$ = this.CursosService.obtenerObservableCursos();
    console.log(this.cursosObservable$);
  }


ngOnInit(): void {
  this.CursosService.obtenerObservableCursos().pipe(map((cursos: any[]) =>
  cursos.filter(cursos =>  cursos.id === 1))).subscribe((cursos) => {
        console.log(cursos);
      });
}

ngOnDestroy(): void {
  this.cursoSuscripcion.unsubscribe();
}

AgregarCurso() {
  let curso = {
    id: 6, materia: 'Química', comision: '20891', profesor: 'Daniela Lioy'
  }
  this.CursosService.AgregarCurso(curso);
}
}


 




