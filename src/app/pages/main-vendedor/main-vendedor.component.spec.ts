import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVendedorComponent } from './main-vendedor.component';

describe('HomeComponent', () => {
  let component: MainVendedorComponent;
  let fixture: ComponentFixture<MainVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainVendedorComponent]
    });
    fixture = TestBed.createComponent(MainVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
