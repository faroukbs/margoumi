import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducsListComponent } from './producs-list.component';

describe('ProducsListComponent', () => {
  let component: ProducsListComponent;
  let fixture: ComponentFixture<ProducsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
