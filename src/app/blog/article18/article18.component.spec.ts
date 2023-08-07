import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article18Component } from './article18.component';

describe('Article18Component', () => {
  let component: Article18Component;
  let fixture: ComponentFixture<Article18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
