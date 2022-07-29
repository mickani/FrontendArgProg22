import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHsComponent } from './eliminar-hs.component';

describe('EliminarHsComponent', () => {
  let component: EliminarHsComponent;
  let fixture: ComponentFixture<EliminarHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
