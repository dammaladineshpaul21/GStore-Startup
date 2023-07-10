import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyBreakfastComponent } from './dairy-breakfast.component';

describe('DairyBreakfastComponent', () => {
  let component: DairyBreakfastComponent;
  let fixture: ComponentFixture<DairyBreakfastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DairyBreakfastComponent]
    });
    fixture = TestBed.createComponent(DairyBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
