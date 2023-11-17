import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontosEditarComponent } from './descontos-editar.component';

describe('DescontosEditarComponent', () => {
  let component: DescontosEditarComponent;
  let fixture: ComponentFixture<DescontosEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescontosEditarComponent]
    });
    fixture = TestBed.createComponent(DescontosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
