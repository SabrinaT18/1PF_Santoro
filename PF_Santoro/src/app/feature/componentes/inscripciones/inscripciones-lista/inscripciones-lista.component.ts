import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Inscripciones } from 'src/app/feature/Model/Inscripciones';
import { InscripcionesService } from 'src/app/feature/servicios/inscripciones.service';
import { AbmInscripComponent } from '../editar-inscripciones/abm-inscrip.component';
import { NuevaInscrComponent } from '../nueva-inscr/nueva-inscr.component';

@Component({
  selector: 'app-inscripciones-lista',
  templateUrl: './inscripciones-lista.component.html',
  styleUrls: ['./inscripciones-lista.component.css']
})
export class InscripcionesListaComponent implements OnInit {
  Inscripciones: [] = [];

  InscripcionesObservable$!: Observable<any>;
  InscripcionesSubscripcion!: Subscription;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'apellidoAlumno', 'nombreAlumno', 'NombreCurso', 'comision', 'acciones'];
  
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
      };
    })
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }


  eliminarInscripcion(id: string){
    this.inscripcionesService.eliminarInscripciones(id).subscribe((insc: Inscripciones) => {
      alert(`Inscripción nº ${insc.id} se eliminó satisfactoriamente`);
      this.ngOnInit();
    });
  }
}
