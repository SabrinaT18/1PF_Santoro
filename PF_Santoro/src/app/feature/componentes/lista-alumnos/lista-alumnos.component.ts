import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Alumnos } from '../../Model/Alumnos';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Observable, Subscription, Subscriber, map } from 'rxjs';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ABMalumnosComponent } from './editar-alumnos/abmalumnos.component';
import { AuthService } from '../../../core/servicios/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})


export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<any>;
  alumnoSubscripcion!: Subscription;
  admin!: boolean;
  auth: any;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'apellido', 'nombre', 'email', 'fechaNacimiento', 'nota', 'estado', 'acciones'];
  
  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;


  nota = 6.5;
  hoy = Date.now();

  constructor(
    private AlumnosService: AlumnosService,
    private dialog: MatDialog,
    private AuthService: AuthService
      ) {
    this.alumnos$ = this.AlumnosService.obtenerAlumnos()

    this.alumnoSubscripcion = this.alumnos$.subscribe((alumnos) => {
        this.dataSource.data = alumnos
        console.log(alumnos);
      });
    }
  

  ngOnInit(): void {     

}

  ngOnDestroy(): void {
    this.alumnoSubscripcion.unsubscribe()
  }

  agregarAlumno() {
    const dialogRef = this.dialog.open(NuevoAlumnoComponent,  {
      width: '400px',
      data: this.alumnos$
    });
      dialogRef.afterClosed().subscribe((resultado) => {
        if(resultado){        
          this.tabla.renderRows();
        }  
    })
  }


  editarAlumno(element: Alumnos) {
    const dialogRef = this.dialog.open(ABMalumnosComponent, {
      width: '400px',
      data: element
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        const item = this.dataSource.data.find(alumno => element.id === resultado.id);
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


  eliminarAlumno(id: string) {
    this.AlumnosService.eliminarAlumno(id).subscribe((alumno: Alumnos) => {
      alert(`${alumno.id}-${alumno.apellido} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }
  



  }



