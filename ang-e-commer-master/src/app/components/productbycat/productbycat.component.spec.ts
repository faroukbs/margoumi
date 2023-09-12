import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbycatComponent } from './productbycat.component';

describe('ProductbycatComponent', () => {
  let component: ProductbycatComponent;
  let fixture: ComponentFixture<ProductbycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbycatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
