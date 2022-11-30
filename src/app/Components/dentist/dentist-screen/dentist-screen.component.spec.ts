import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistScreenComponent } from './dentist-screen.component';

describe('DentistScreenComponent', () => {
  let component: DentistScreenComponent;
  let fixture: ComponentFixture<DentistScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentistScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentistScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
