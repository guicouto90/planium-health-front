import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryScreenComponent } from './beneficiary-screen.component';

describe('BeneficiaryScreenComponent', () => {
  let component: BeneficiaryScreenComponent;
  let fixture: ComponentFixture<BeneficiaryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
