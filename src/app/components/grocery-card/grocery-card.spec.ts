import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCard } from './grocery-card';

describe('GroceryCard', () => {
  let component: GroceryCard;
  let fixture: ComponentFixture<GroceryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
