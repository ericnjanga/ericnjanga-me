import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article17Component } from './article17.component';

describe('Article17Component', () => {
  let component: Article17Component;
  let fixture: ComponentFixture<Article17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
