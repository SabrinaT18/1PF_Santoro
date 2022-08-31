import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private form: FormBuilder, private router: Router
  ){
    this.formulario = form.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      admin: new FormControl('')
    });
      }
      
  ngOnInit(): void {
  }

  enviar(){
    console.log(this.formulario);
  }

  onLogin(event:Event ){
    event.preventDefault;
    this.router.navigate(['/inicio']);
      console.error()} 
    }
             
      
  


