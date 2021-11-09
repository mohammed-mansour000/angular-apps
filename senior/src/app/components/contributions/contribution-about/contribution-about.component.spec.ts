import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionAboutComponent } from './contribution-about.component';

describe('ContributionAboutComponent', () => {
  let component: ContributionAboutComponent;
  let fixture: ComponentFixture<ContributionAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
