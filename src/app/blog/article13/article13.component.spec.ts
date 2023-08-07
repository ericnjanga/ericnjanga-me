import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article13Component } from './article13.component';

describe('Article13Component', () => {
  let component: Article13Component;
  let fixture: ComponentFixture<Article13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
