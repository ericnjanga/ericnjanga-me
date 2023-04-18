import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopClientsListComponent } from './top-clients-list.component';

describe('TopClientsListComponent', () => {
  let component: TopClientsListComponent;
  let fixture: ComponentFixture<TopClientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopClientsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
