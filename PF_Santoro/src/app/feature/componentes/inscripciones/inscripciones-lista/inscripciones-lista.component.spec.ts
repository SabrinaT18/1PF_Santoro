import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesListaComponent } from './inscripciones-lista.component';

describe('InscripcionesListaComponent', () => {
    let component: InscripcionesListaComponent;
    let fixture: ComponentFixture<InscripcionesListaComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          HttpClientModule,
          SharedModule,
          StoreModule.forRoot({}),
          RouterTestingModule,
          ],
        declarations: [ InscripcionesListaComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(InscripcionesListaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('se crea', () => {
      expect(component).toBeTruthy();
    });
  
    it(
      'Las inscripciones se cargan correctamente', 
      () => {
      const fixture = TestBed.createComponent(InscripcionesListaComponent);
      const controlador = fixture.componentInstance;
  
      fixture.detectChanges();
      setTimeout(() => {
        expect(controlador.data$).toBeTruthy();
      }, 5000);
    })
  
    it(
      'La tabla inscripciones se muestra en pantalla',    () => {
        const fixture = TestBed.createComponent(InscripcionesListaComponent);
        const vista = fixture.nativeElement as HTMLElement;
  
        fixture.detectChanges();
        expect(vista.querySelector('table')?.textContent).toContain(
          'inscripción'
        );
    })
  })