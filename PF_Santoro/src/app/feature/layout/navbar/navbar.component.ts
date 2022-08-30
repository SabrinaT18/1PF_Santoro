import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor( public router: Router ) {   
 }

   redireccionar(ruta: string) {
   this.router.navigate ([ruta]);
   }

}




