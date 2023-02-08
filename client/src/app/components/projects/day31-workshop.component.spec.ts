import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day31WorkshopComponent } from './day31-workshop.component';

describe('Day31WorkshopComponent', () => {
  let component: Day31WorkshopComponent;
  let fixture: ComponentFixture<Day31WorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day31WorkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day31WorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
