import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NuevoCursoComponent } from './nuevo-curso.component';

describe('NuevoCursoComponent', () => {
  let component: NuevoCursoComponent;
  let fixture: ComponentFixture<NuevoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ NuevoCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se crea', () => {
    expect(component).toBeTruthy();
  });


  it('formulario inválido cuando ingreso un solo campo', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['materia'];

    expect(formulario.invalid).toBeTrue();
  });

  it('El formulario se cambia a válido cuando ingreso los campos requeridos', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['materia'];
    const profesor = formulario.controls['profesor'];

    expect(formulario.invalid).toBeFalse();
  });

  it('Se renderiza el objeto de cursos cuando doy click al botón guardar', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['materia'];
    const profesor = formulario.controls['profesor'];

    const boton = fixture.debugElement.query(By.css('#btnCrear'));
    boton.nativeElement.click();
    fixture.detectChanges();

   /*  const listaCursosRef = fixture.debugElement.query(By.('')));

    expect(listaCursosRef).toBeTruthy(); */
  });
});
