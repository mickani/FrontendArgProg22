import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInexistenteComponent } from './pag-inexistente.component';

describe('PagInexistenteComponent', () => {
  let component: PagInexistenteComponent;
  let fixture: ComponentFixture<PagInexistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagInexistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInexistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
