import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSkillsComponent } from './two-skills.component';

describe('TwoSkillsComponent', () => {
  let component: TwoSkillsComponent;
  let fixture: ComponentFixture<TwoSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
