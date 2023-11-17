import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVendedorComponent } from './registro-vendedor.component';

describe('RegistroVendedorComponent', () => {
  let component: RegistroVendedorComponent;
  let fixture: ComponentFixture<RegistroVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroVendedorComponent]
    });
    fixture = TestBed.createComponent(RegistroVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
