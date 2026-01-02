import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactCard } from './impact-card';

describe('ImpactCard', () => {
  let component: ImpactCard;
  let fixture: ComponentFixture<ImpactCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpactCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
