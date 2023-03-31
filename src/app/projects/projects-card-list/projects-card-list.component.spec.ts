import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCardListComponent } from './projects-card-list.component';

describe('ProjectsCardListComponent', () => {
  let component: ProjectsCardListComponent;
  let fixture: ComponentFixture<ProjectsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
