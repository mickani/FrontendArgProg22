import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDescripComponent } from './editar-descrip.component';

describe('EditarDescripComponent', () => {
  let component: EditarDescripComponent;
  let fixture: ComponentFixture<EditarDescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDescripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
