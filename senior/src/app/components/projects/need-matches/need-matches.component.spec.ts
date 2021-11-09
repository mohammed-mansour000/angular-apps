import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedMatchesComponent } from './need-matches.component';

describe('NeedMatchesComponent', () => {
  let component: NeedMatchesComponent;
  let fixture: ComponentFixture<NeedMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
