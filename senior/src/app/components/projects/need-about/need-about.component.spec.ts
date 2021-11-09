import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedAboutComponent } from './need-about.component';

describe('NeedAboutComponent', () => {
  let component: NeedAboutComponent;
  let fixture: ComponentFixture<NeedAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
