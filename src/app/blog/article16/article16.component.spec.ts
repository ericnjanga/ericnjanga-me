import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article16Component } from './article16.component';

describe('Article16Component', () => {
  let component: Article16Component;
  let fixture: ComponentFixture<Article16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
