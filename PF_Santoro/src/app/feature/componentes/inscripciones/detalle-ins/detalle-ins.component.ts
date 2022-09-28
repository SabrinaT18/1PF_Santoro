import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inscripciones } from '../../../Model/Inscripciones';
import { InscripcionesService } from '../../../servicios/inscripciones.service';

@Component({
  selector: 'app-detalle-ins',
  templateUrl: './detalle-ins.component.html',
  styleUrls: ['./detalle-ins.component.css']
})
export class DetalleInsComponent implements OnInit {
  inscripciones$!: Observable<Inscripciones[] | undefined>;

  constructor(
    private InscripcionesService: InscripcionesService,
    public dialogRef: MatDialogRef<DetalleInsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscripciones,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
  
  }

  cerrar() {
    this.dialogRef.close();
  }

}
