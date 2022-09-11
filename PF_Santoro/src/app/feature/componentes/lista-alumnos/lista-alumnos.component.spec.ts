import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaAlumnosComponent } from './lista-alumnos.component';
import { SharedModule } from '../../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListaAlumnosComponent', () => {
  let component: ListaAlumnosComponent;
  let fixture: ComponentFixture<ListaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        StoreModule.forRoot({}),
        RouterTestingModule
        ],
      declarations: [ ListaAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se crea', () => {
    expect(component).toBeTruthy();
  });

  it(
    'Los alumnos se estan cargando correctamente', 
    () => {
    const fixture = TestBed.createComponent(ListaAlumnosComponent);
    const controlador = fixture.componentInstance;

    fixture.detectChanges();
    setTimeout(() => {
      expect(controlador.alumnos$).toBeTruthy();
    }, 5000);
  })

  it(
    'La tabla alumnos se muestra en pantalla',    () => {
      const fixture = TestBed.createComponent(ListaAlumnosComponent);
      const vista = fixture.nativeElement as HTMLElement;

      fixture.detectChanges();
      expect(vista.querySelector('table')?.textContent).toContain(
        'Nombre'
      );
  })
});
