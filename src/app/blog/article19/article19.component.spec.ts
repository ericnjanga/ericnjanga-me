import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article19Component } from './article19.component';

describe('Article19Component', () => {
  let component: Article19Component;
  let fixture: ComponentFixture<Article19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Article19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
