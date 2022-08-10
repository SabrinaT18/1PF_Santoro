import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ABMalumnosComponent } from '../abmalumnos/abmalumnos.component';

export interface alumno {
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: string;
  nota: number;
}

const ELEMENT_DATA: alumno [] = [
  { nombre: 'Juan', apellido: 'Perez', email: 'juan@mail.com', fechaNacimiento: '25/12/1991', nota: 9 },
  { nombre: 'Candela', apellido: 'Benitez', email: 'candela@mail.com', fechaNacimiento: '05/09/1988', nota: 10 },
  { nombre: 'Marcos', apellido: 'García', email: 'marcos@mail.com', fechaNacimiento: '12/02/1983', nota: 4 },
  { nombre: 'Alejo', apellido: 'Nuñez', email: 'alejo@mail.com', fechaNacimiento: '18/05/1984', nota: 6 },
  { nombre: 'Guadalupe', apellido: 'Suarez', email: 'guadalupe@mail.com', fechaNacimiento: '21/08/1994', nota: 2},
  { nombre: 'Victoria', apellido: 'Lopez', email: 'victoria@mail.com', fechaNacimiento: '16/04/1985',  nota: 8},
]


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  columnas: string[] = ['nombre', 'apellido', 'email', 'fechaNacimiento', 'nota'] ;
  dataSource: MatTableDataSource<alumno> = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatTable) tabla!: MatTable<alumno>;

  variableNota = 7;
  hoy = Date.now();
  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(element: alumno){
    this.dataSource.data = this.dataSource.data.filter((alumno: alumno) => alumno.nombre != element.nombre);
  }


  editar(element: alumno){
    const dialogRef = this.dialog.open(ABMalumnosComponent, {
      width: '350px',
      data: element
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(curso => element.nombre === resultado.nombre);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }


  cambiarNota() {
    this.variableNota = Math.round(Math.random() * 10)
  }

}
