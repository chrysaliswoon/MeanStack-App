import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day31WorkshopCartComponent } from './day31-workshop-cart.component';

describe('Day31WorkshopCartComponent', () => {
  let component: Day31WorkshopCartComponent;
  let fixture: ComponentFixture<Day31WorkshopCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day31WorkshopCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day31WorkshopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
