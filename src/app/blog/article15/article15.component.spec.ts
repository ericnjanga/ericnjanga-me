import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article15Component } from './article15.component';

describe('Article15Component', () => {
  let component: Article15Component;
  let fixture: ComponentFixture<Article15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
