import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestContributionsComponent } from './latest-contributions.component';

describe('LatestContributionsComponent', () => {
  let component: LatestContributionsComponent;
  let fixture: ComponentFixture<LatestContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
