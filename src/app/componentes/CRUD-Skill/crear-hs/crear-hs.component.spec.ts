import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHsComponent } from './crear-hs.component';

describe('CrearHsComponent', () => {
  let component: CrearHsComponent;
  let fixture: ComponentFixture<CrearHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
