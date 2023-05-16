import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExcellenceComponent } from './about-excellence.component';

describe('AboutExcellenceComponent', () => {
  let component: AboutExcellenceComponent;
  let fixture: ComponentFixture<AboutExcellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutExcellenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
