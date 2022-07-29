import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarELComponent } from './eliminar-el.component';

describe('EliminarELComponent', () => {
  let component: EliminarELComponent;
  let fixture: ComponentFixture<EliminarELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarELComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
