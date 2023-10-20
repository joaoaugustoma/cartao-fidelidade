import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVendedorFormComponent } from './login-vendedor-form.component';

describe('LoginFormComponent', () => {
  let component: LoginVendedorFormComponent;
  let fixture: ComponentFixture<LoginVendedorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginVendedorFormComponent]
    });
    fixture = TestBed.createComponent(LoginVendedorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
