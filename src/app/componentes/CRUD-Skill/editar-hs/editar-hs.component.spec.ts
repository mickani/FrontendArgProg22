import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHsComponent } from './editar-hs.component';

describe('EditarHsComponent', () => {
  let component: EditarHsComponent;
  let fixture: ComponentFixture<EditarHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
