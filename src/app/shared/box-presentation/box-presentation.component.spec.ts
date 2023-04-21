import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPresentationComponent } from './box-presentation.component';

describe('BoxPresentationComponent', () => {
  let component: BoxPresentationComponent;
  let fixture: ComponentFixture<BoxPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
