import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProyComponent } from './eliminar-proy.component';

describe('EliminarProyComponent', () => {
  let component: EliminarProyComponent;
  let fixture: ComponentFixture<EliminarProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
