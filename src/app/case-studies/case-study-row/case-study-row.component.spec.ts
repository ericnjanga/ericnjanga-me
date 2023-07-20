import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyRowComponent } from './case-study-row.component';

describe('CaseStudyRowComponent', () => {
  let component: CaseStudyRowComponent;
  let fixture: ComponentFixture<CaseStudyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
