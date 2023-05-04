import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaptionComponent } from './title-caption.component';

describe('TitleCaptionComponent', () => {
  let component: TitleCaptionComponent;
  let fixture: ComponentFixture<TitleCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCaptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
