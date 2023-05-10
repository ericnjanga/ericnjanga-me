import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicePosterComponent } from './nice-poster.component';

describe('NicePosterComponent', () => {
  let component: NicePosterComponent;
  let fixture: ComponentFixture<NicePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicePosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NicePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
