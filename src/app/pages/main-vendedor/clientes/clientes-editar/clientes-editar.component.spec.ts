import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesEditarComponent } from './clientes-editar.component';

describe('ClientesEditarComponent', () => {
  let component: ClientesEditarComponent;
  let fixture: ComponentFixture<ClientesEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesEditarComponent]
    });
    fixture = TestBed.createComponent(ClientesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
