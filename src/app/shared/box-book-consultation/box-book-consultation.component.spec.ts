import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBookConsultationComponent } from './box-book-consultation.component';

describe('BoxBookConsultationComponent', () => {
  let component: BoxBookConsultationComponent;
  let fixture: ComponentFixture<BoxBookConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxBookConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxBookConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
