import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective {
  
  @Input('appTitulos') tamaño: number= 20;
  
    constructor(

   private elemento: ElementRef
   ) { 

   console.log(elemento);

  this.elemento.nativeElement.style.fontSize = this.tamaño+ 'px';

   }
}