import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Inscripciones } from '../../Model/Inscripciones';
import { MatDialog } from '@angular/material/dialog';
import { NuevaInscrComponent } from './nueva-inscr/nueva-inscr.component';
import { AbmInscripComponent } from './abm-inscrip/abm-inscrip.component';
import { InscripcionesService } from 'src/app/feature/servicios/inscripciones.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  Inscripciones: [] = [];

  InscripcionesObservable$!: Observable<any>;
  InscripcionesSubscripcion!: Subscription;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'idAlumno', 'apellidoAlumno', 'nombreAlumno', 'IdCurso', 'NombreCurso', 'comision', 'profesor', 'acciones'];
  
  @ViewChild(MatTable) tabla!: MatTable<Inscripciones>;

  constructor(
  private dialog: MatDialog,
   private inscripcionesService: InscripcionesService,
  ) {
    
    this.InscripcionesObservable$ = this.inscripcionesService.obtenerInscripciones()

    this.InscripcionesSubscripcion = this.InscripcionesObservable$.subscribe((Inscripciones) => {
        this.dataSource.data = Inscripciones
        console.log(Inscripciones);
      });
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void {
    this.InscripcionesSubscripcion.unsubscribe()
  }

  agregarInscripcion() {
    const dialogRef = this.dialog.open(NuevaInscrComponent, {
      width: '400px',
      data: this.Inscripciones
    });
    dialogRef.afterClosed().subscribe(resultado => {
      this.inscripcionesService.inscripciones.push(resultado);
      this.tabla.renderRows();
    })
  }

  editarInscripcion(element: Inscripciones) {
    const dialogRef = this.dialog.open(AbmInscripComponent, {
      width: '400px',
      data: element
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        const item = this.dataSource.data.find(inscripciones => element.id === resultado.id);
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


  eliminarInscripcion(elemento: Inscripciones) {
    this.dataSource.data = this.dataSource.data.filter((inscripciones: Inscripciones) => inscripciones.id != inscripciones.id);
  }


}

