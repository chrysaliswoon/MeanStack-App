import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error1PageComponent } from './error1-page.component';

describe('Error1PageComponent', () => {
  let component: Error1PageComponent;
  let fixture: ComponentFixture<Error1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
