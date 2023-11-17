import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteirasEditarComponent } from './carteiras-editar.component';

describe('CarteirasEditarComponent', () => {
  let component: CarteirasEditarComponent;
  let fixture: ComponentFixture<CarteirasEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteirasEditarComponent]
    });
    fixture = TestBed.createComponent(CarteirasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
