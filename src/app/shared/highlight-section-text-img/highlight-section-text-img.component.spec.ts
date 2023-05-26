import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightSectionTextImgComponent } from './highlight-section-text-img.component';

describe('HighlightSectionTextImgComponent', () => {
  let component: HighlightSectionTextImgComponent;
  let fixture: ComponentFixture<HighlightSectionTextImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightSectionTextImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightSectionTextImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
