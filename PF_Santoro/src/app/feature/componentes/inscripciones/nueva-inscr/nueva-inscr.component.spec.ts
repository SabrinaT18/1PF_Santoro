import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaInscrComponent } from './nueva-inscr.component';

describe('NuevaInscrComponent', () => {
  let component: NuevaInscrComponent;
  let fixture: ComponentFixture<NuevaInscrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaInscrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaInscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
