import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichyGroupComponent } from './richy-group.component';

describe('RichyGroupComponent', () => {
  let component: RichyGroupComponent;
  let fixture: ComponentFixture<RichyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichyGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
