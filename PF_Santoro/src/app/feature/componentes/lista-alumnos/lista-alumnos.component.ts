import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ABMalumnosComponent } from '../../formularios abm/abmalumnos/abmalumnos.component';

export interface Alumno {
  apellido: string;
  nombre: string;
  email: string;
  fechaNacimiento: string;
  nota: number;
  estado: boolean;
}

const ELEMENT_DATA: Alumno [] = [
  { apellido: 'Perez', nombre: 'Juan',  email: 'juan@mail.com', fechaNacimiento: '25/12/1991', nota: 9, estado: true  },
  { apellido: 'Benitez', nombre: 'Candela',  email: 'candela@mail.com', fechaNacimiento: '05/09/1988', nota: 10, estado: true },
  { apellido: 'García', nombre: 'Marcos',  email: 'marcos@mail.com', fechaNacimiento: '12/02/1983', nota: 4, estado: false },
  { apellido: 'Nuñez', nombre: 'Alejo', email: 'alejo@mail.com', fechaNacimiento: '18/05/1984', nota: 6, estado: false },
  { apellido: 'Suarez', nombre: 'Guadalupe', email: 'guadalupe@mail.com', fechaNacimiento: '21/08/1994', nota: 2, estado: false},
  { apellido: 'Lopez', nombre: 'Victoria',  email: 'victoria@mail.com', fechaNacimiento: '16/04/1985',  nota: 8, estado: true}
]


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent implements OnInit {
  displayedColumns: string [] = ['apellido','nombre', 'email', 'fechaNacimiento', 'nota', 'estado','acciones'] ;
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Alumno>;
  
  nota= 6.5;
  hoy = Date.now();

 constructor(
 private dialog: MatDialog   
  ) { }

  ngOnInit(): void {
  }

agregar (element: Alumno){
  const dialogRef = this.dialog.open(ABMalumnosComponent, {
    width: '400px',
    data: Element
  });
  dialogRef.afterClosed().subscribe(resultado => {
  this.dataSource.data.push(element);
  this.tabla.renderRows();
  })
}


  eliminar(element: Alumno): void{
    this.dataSource.data = this.dataSource.data.filter((alumno: Alumno) => alumno.nombre != element.nombre);
  }

  editar(element: Alumno){
    const dialogRef = this.dialog.open(ABMalumnosComponent, {
      width: '400px',
      data: element
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(alumno => element.nombre === resultado.nombre);
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

 }
