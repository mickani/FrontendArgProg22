import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBannerComponent } from './editar-banner.component';

describe('EditarBannerComponent', () => {
  let component: EditarBannerComponent;
  let fixture: ComponentFixture<EditarBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
