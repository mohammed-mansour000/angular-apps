import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBroadcastsComponent } from './latest-broadcasts.component';

describe('LatestBroadcastsComponent', () => {
  let component: LatestBroadcastsComponent;
  let fixture: ComponentFixture<LatestBroadcastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBroadcastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBroadcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
