import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/servicios/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class adminComponent implements OnInit {

  constructor(
    private router: Router ,
    public AuthService: AuthService
  ) { }

  ngOnInit(): void {
  }

  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

 
}
