import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLinkCard } from './contact-link-card';

describe('ContactLinkCard', () => {
  let component: ContactLinkCard;
  let fixture: ComponentFixture<ContactLinkCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLinkCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactLinkCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
