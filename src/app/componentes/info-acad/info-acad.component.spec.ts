import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAcadComponent } from './info-acad.component';

describe('InfoAcadComponent', () => {
  let component: InfoAcadComponent;
  let fixture: ComponentFixture<InfoAcadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAcadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAcadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
