import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClienteComponent } from './main-cliente.component';

describe('HomeComponent', () => {
  let component: MainClienteComponent;
  let fixture: ComponentFixture<MainClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainClienteComponent]
    });
    fixture = TestBed.createComponent(MainClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
