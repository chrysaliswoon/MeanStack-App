import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day31ImageComponent } from './day31-image.component';

describe('Day31ImageComponent', () => {
  let component: Day31ImageComponent;
  let fixture: ComponentFixture<Day31ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day31ImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day31ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
