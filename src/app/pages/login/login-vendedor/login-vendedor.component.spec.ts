import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVendedorComponent } from './login-vendedor.component';

describe('LoginComponent', () => {
  let component: LoginVendedorComponent;
  let fixture: ComponentFixture<LoginVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginVendedorComponent]
    });
    fixture = TestBed.createComponent(LoginVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
