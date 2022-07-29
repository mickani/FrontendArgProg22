import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSsComponent } from './crear-ss.component';

describe('CrearSsComponent', () => {
  let component: CrearSsComponent;
  let fixture: ComponentFixture<CrearSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
