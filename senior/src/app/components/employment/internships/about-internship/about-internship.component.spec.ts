import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInternshipComponent } from './about-internship.component';

describe('AboutInternshipComponent', () => {
  let component: AboutInternshipComponent;
  let fixture: ComponentFixture<AboutInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
