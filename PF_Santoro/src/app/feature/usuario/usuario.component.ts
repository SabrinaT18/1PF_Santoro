import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/servicios/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private router: Router ,
    public AuthService: AuthService
  ) { }

  ngOnInit(): void {
  }


  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

  isAdmin(){
    
  }

}
