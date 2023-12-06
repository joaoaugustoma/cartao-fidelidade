import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosEditarComponent } from './produtos-editar.component';

describe('ProdutosEditarComponent', () => {
  let component: ProdutosEditarComponent;
  let fixture: ComponentFixture<ProdutosEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosEditarComponent]
    });
    fixture = TestBed.createComponent(ProdutosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
