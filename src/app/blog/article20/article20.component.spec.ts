import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article20Component } from './article20.component';

describe('Article20Component', () => {
  let component: Article20Component;
  let fixture: ComponentFixture<Article20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
