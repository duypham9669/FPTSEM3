import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductForuserComponent } from './product-foruser.component';

describe('ProductForuserComponent', () => {
  let component: ProductForuserComponent;
  let fixture: ComponentFixture<ProductForuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductForuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductForuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
