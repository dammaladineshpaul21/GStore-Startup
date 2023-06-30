import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryDashbordComponent } from './grocery-dashbord.component';

describe('GroceryDashbordComponent', () => {
  let component: GroceryDashbordComponent;
  let fixture: ComponentFixture<GroceryDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryDashbordComponent]
    });
    fixture = TestBed.createComponent(GroceryDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
