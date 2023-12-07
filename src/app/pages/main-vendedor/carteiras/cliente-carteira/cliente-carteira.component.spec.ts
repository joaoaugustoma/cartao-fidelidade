import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCarteiraComponent } from './cliente-carteira.component';

describe('ClienteCarteiraComponent', () => {
  let component: ClienteCarteiraComponent;
  let fixture: ComponentFixture<ClienteCarteiraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteCarteiraComponent]
    });
    fixture = TestBed.createComponent(ClienteCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
