import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNeedsComponent } from './project-needs.component';

describe('ProjectNeedsComponent', () => {
  let component: ProjectNeedsComponent;
  let fixture: ComponentFixture<ProjectNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
