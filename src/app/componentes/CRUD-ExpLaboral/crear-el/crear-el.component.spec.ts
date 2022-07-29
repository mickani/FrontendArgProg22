import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearELComponent } from './crear-el.component';

describe('CrearELComponent', () => {
  let component: CrearELComponent;
  let fixture: ComponentFixture<CrearELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearELComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
