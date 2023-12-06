import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaProdutoComponent } from './loja-produto.component';

describe('LojaProdutoComponent', () => {
  let component: LojaProdutoComponent;
  let fixture: ComponentFixture<LojaProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LojaProdutoComponent]
    });
    fixture = TestBed.createComponent(LojaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
