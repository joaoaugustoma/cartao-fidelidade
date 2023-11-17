import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteirasComponent } from './carteiras.component';

describe('CarteirasComponent', () => {
  let component: CarteirasComponent;
  let fixture: ComponentFixture<CarteirasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteirasComponent]
    });
    fixture = TestBed.createComponent(CarteirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
