import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiosComponent } from './premios.component';

describe('PremiosComponent', () => {
  let component: PremiosComponent;
  let fixture: ComponentFixture<PremiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiosComponent]
    });
    fixture = TestBed.createComponent(PremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
