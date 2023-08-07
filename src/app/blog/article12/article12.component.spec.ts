import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article12Component } from './article12.component';

describe('Article12Component', () => {
  let component: Article12Component;
  let fixture: ComponentFixture<Article12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
