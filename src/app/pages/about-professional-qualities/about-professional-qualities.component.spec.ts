import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProfessionalQualitiesComponent } from './about-professional-qualities.component';

describe('AboutProfessionalQualitiesComponent', () => {
  let component: AboutProfessionalQualitiesComponent;
  let fixture: ComponentFixture<AboutProfessionalQualitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProfessionalQualitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProfessionalQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
