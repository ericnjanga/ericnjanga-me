import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMentorsComponent } from './about-mentors.component';

describe('AboutMentorsComponent', () => {
  let component: AboutMentorsComponent;
  let fixture: ComponentFixture<AboutMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMentorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
