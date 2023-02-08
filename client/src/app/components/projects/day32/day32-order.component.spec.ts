import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day32OrderComponent } from './day32-order.component';

describe('Day32OrderComponent', () => {
  let component: Day32OrderComponent;
  let fixture: ComponentFixture<Day32OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day32OrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day32OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
