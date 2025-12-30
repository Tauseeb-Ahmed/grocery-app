import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCatalogue } from './grocery-catalogue';

describe('GroceryCatalogue', () => {
  let component: GroceryCatalogue;
  let fixture: ComponentFixture<GroceryCatalogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryCatalogue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryCatalogue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
