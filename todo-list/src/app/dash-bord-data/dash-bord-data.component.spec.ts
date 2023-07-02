import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordDataComponent } from './dash-bord-data.component';

describe('DashBordDataComponent', () => {
  let component: DashBordDataComponent;
  let fixture: ComponentFixture<DashBordDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashBordDataComponent]
    });
    fixture = TestBed.createComponent(DashBordDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
