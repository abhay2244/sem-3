import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacultyComponent } from './detail-faculty.component';

describe('DetailFacultyComponent', () => {
  let component: DetailFacultyComponent;
  let fixture: ComponentFixture<DetailFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
