import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUxDesignerComponent } from './about-ux-designer.component';

describe('AboutUxDesignerComponent', () => {
  let component: AboutUxDesignerComponent;
  let fixture: ComponentFixture<AboutUxDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUxDesignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUxDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
