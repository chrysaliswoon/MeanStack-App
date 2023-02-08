import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day31WorkshopInventoryComponent } from './day31-workshop-inventory.component';

describe('Day31WorkshopInventoryComponent', () => {
  let component: Day31WorkshopInventoryComponent;
  let fixture: ComponentFixture<Day31WorkshopInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day31WorkshopInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day31WorkshopInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
