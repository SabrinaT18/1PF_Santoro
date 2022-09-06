import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Cursos } from 'src/app/feature/Model/Cursos';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { CursosService } from 'src/app/feature/servicios/cursos.service';
import { AbmCursosComponent } from '../editar-cursos/abm-cursos.component';
import { NuevoCursoComponent } from '../nuevo-curso/nuevo-curso.component';
import { UsuarioService } from '../../../servicios/usuario.service';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable <Cursos[]>;
  
  cursoSubscripcion!: Subscription;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'materia', 'comision', 'profesor', 'fechaInicio', 'acciones'];
  @ViewChild(MatTable) tabla!: MatTable<Cursos>;
  

  
constructor(
 private CursosService : CursosService,  
 private dialog: MatDialog,  )
  {  }


ngOnInit(): void {
 this.cursos$ = this.CursosService.obtenerCursos()

 this.cursoSubscripcion = this.cursos$.subscribe((cursos) => {
  this.dataSource.data = cursos
  console.log(cursos);
});
}

AgregarCurso() {
 const dialogRef = this.dialog.open(NuevoCursoComponent, {
      width: '400px',
      data:this.cursos$
    });
        dialogRef.afterClosed().subscribe((resultado) => {
      if(resultado){        
        this.tabla.renderRows();
      }  
    }) }


  editarCurso(curso: Cursos) {
    const dialogRef = this.dialog.open(AbmCursosComponent, {
      width: '400px',
      data: curso
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        const item = this.dataSource.data.find(cursos => curso.id === resultado.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  eliminarCurso(id: string){
    this.CursosService.BorrarCurso(id).subscribe((curso: Cursos) => {
      alert(`${curso.id}-${curso.materia} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }

   filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }  

ngOnDestroy(): void {
  this.cursoSubscripcion.unsubscribe()
}

}
