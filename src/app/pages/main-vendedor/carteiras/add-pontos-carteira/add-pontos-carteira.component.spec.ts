import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPontosCarteiraComponent } from './add-pontos-carteira.component';

describe('AddPontosCarteiraComponent', () => {
  let component: AddPontosCarteiraComponent;
  let fixture: ComponentFixture<AddPontosCarteiraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPontosCarteiraComponent]
    });
    fixture = TestBed.createComponent(AddPontosCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
