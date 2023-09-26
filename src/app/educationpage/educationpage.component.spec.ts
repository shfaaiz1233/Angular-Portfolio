import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationpageComponent } from './educationpage.component';

describe('EducationpageComponent', () => {
  let component: EducationpageComponent;
  let fixture: ComponentFixture<EducationpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationpageComponent]
    });
    fixture = TestBed.createComponent(EducationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
