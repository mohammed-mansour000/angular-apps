import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPriviligeComponent } from './edit-privilige.component';

describe('EditPriviligeComponent', () => {
  let component: EditPriviligeComponent;
  let fixture: ComponentFixture<EditPriviligeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPriviligeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPriviligeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
