import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManageComponent } from './product-manage.component';

describe('ProductManageComponent', () => {
  let component: ProductManageComponent;
  let fixture: ComponentFixture<ProductManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductManageComponent]
    });
    fixture = TestBed.createComponent(ProductManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
