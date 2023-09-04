import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPageDetailComponent } from './property-page-detail.component';

describe('PropertyPageDetailComponent', () => {
  let component: PropertyPageDetailComponent;
  let fixture: ComponentFixture<PropertyPageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyPageDetailComponent]
    });
    fixture = TestBed.createComponent(PropertyPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
