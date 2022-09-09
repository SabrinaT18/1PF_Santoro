import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Alumnos } from 'src/app/feature/Model/Alumnos';
import { AlumnosService } from '../../../servicios/alumnos.service';
import { AuthService } from '../../../../core/servicios/auth.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NuevoAlumnoComponent } from '../nuevo-alumno/nuevo-alumno.component';
import { ABMalumnosComponent } from '../editar-alumnos/abmalumnos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos$!: Observable<any>;
  alumnoSubscripcion!: Subscription;
  admin!: boolean;
  auth: any;


  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'apellido', 'nombre', 'email', 'fechaNacimiento', 'nota', 'estado', 'acciones'];
  
  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;


  constructor(
    private AlumnosService: AlumnosService,
    private dialog: MatDialog,
    private router: Router,
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


  eliminarAlumno(id: string) {
    this.AlumnosService.eliminarAlumno(id).subscribe((alumno: Alumnos) => {
      alert(`${alumno.id}-${alumno.apellido} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }
  
  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }


  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

}
