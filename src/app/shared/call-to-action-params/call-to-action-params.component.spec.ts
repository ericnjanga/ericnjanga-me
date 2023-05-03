import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionParamsComponent } from './call-to-action-params.component';

describe('CallToActionParamsComponent', () => {
  let component: CallToActionParamsComponent;
  let fixture: ComponentFixture<CallToActionParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToActionParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
