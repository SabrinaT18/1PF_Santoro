import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  {

  constructor( public router: Router ) {   
  }
 
    redireccionar(ruta: string) {
    this.router.navigate ([ruta]);
    }
 

}
