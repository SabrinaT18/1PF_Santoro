import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../core/servicios/auth.service';
import { Usuario } from '../../Model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formulario: FormGroup;
usuario?: Usuario;

  constructor(
    private form: FormBuilder, private router: Router, private AuthService: AuthService ){

    this.formulario = form.group({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      admin: new FormControl(''),
      canActivateChild: new FormControl(''),
      canLoad: new FormControl(''),
      canDeactivate:new FormControl('') ,  
      id: ('') ,
      username: new FormControl ('')
    });
      }
      
  ngOnInit(): void {
  }

  enviar(){
    console.log(this.formulario);
  }

  onLogin(){
    const usuario: Usuario = {
      email: this.formulario.value.email,
      username: this.formulario.value.username,
      password: this.formulario.value.password,
      admin: this.formulario.value.admin,
      id: this.formulario.value.id,
 }
    this.AuthService.IniciarSesion(usuario);
    this.router.navigate(['/inicio']); 
     }
    }



            
  
  


