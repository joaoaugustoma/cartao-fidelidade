import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVendedorComponent } from './perfil-vendedor.component';

describe('PerfilComponent', () => {
  let component: PerfilVendedorComponent;
  let fixture: ComponentFixture<PerfilVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilVendedorComponent]
    });
    fixture = TestBed.createComponent(PerfilVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
