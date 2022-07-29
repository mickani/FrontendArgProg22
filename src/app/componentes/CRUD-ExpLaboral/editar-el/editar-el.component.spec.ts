import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarELComponent } from './editar-el.component';

describe('EditarELComponent', () => {
  let component: EditarELComponent;
  let fixture: ComponentFixture<EditarELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarELComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
