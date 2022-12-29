import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraycrudComponent } from './arraycrud.component';

describe('ArraycrudComponent', () => {
  let component: ArraycrudComponent;
  let fixture: ComponentFixture<ArraycrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraycrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraycrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
