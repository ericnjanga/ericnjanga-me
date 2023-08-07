import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article14Component } from './article14.component';

describe('Article14Component', () => {
  let component: Article14Component;
  let fixture: ComponentFixture<Article14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
