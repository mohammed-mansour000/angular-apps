import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriviligeComponent } from './add-privilige.component';

describe('AddPriviligeComponent', () => {
  let component: AddPriviligeComponent;
  let fixture: ComponentFixture<AddPriviligeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPriviligeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPriviligeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
