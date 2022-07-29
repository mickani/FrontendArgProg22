import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSsComponent } from './eliminar-ss.component';

describe('EliminarSsComponent', () => {
  let component: EliminarSsComponent;
  let fixture: ComponentFixture<EliminarSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
