import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginClienteFormComponent } from './login-cliente-form.component';

describe('LoginFormComponent', () => {
  let component: LoginClienteFormComponent;
  let fixture: ComponentFixture<LoginClienteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginClienteFormComponent]
    });
    fixture = TestBed.createComponent(LoginClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
