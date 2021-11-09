import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviligesComponent } from './priviliges.component';

describe('PriviligesComponent', () => {
  let component: PriviligesComponent;
  let fixture: ComponentFixture<PriviligesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriviligesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviligesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
