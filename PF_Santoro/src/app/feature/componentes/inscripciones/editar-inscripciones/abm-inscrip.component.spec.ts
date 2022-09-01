import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmInscripComponent } from './abm-inscrip.component';

describe('AbmInscripComponent', () => {
  let component: AbmInscripComponent;
  let fixture: ComponentFixture<AbmInscripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmInscripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmInscripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
