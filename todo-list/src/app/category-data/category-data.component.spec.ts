import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDataComponent } from './category-data.component';

describe('CategoryDataComponent', () => {
  let component: CategoryDataComponent;
  let fixture: ComponentFixture<CategoryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryDataComponent]
    });
    fixture = TestBed.createComponent(CategoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
