import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UidevelopmentComponent } from './uidevelopment.component';

describe('UidevelopmentComponent', () => {
  let component: UidevelopmentComponent;
  let fixture: ComponentFixture<UidevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UidevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UidevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
