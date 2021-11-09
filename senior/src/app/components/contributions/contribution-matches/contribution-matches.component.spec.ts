import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionMatchesComponent } from './contribution-matches.component';

describe('ContributionMatchesComponent', () => {
  let component: ContributionMatchesComponent;
  let fixture: ComponentFixture<ContributionMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
