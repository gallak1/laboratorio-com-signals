import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoMassaElementoComponent } from './calculo-massa-elemento.component';

describe('CalculoMassaElementoComponent', () => {
  let component: CalculoMassaElementoComponent;
  let fixture: ComponentFixture<CalculoMassaElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoMassaElementoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoMassaElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
