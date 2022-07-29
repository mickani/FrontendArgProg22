import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSsComponent } from './editar-ss.component';

describe('EditarSsComponent', () => {
  let component: EditarSsComponent;
  let fixture: ComponentFixture<EditarSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
