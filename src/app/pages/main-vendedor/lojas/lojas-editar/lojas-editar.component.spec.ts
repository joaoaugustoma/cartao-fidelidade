import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasEditarComponent } from './lojas-editar.component';

describe('LojasEditarComponent', () => {
  let component: LojasEditarComponent;
  let fixture: ComponentFixture<LojasEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LojasEditarComponent]
    });
    fixture = TestBed.createComponent(LojasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
