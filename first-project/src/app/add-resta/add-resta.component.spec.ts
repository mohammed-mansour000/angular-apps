import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaComponent } from './add-resta.component';

describe('AddRestaComponent', () => {
  let component: AddRestaComponent;
  let fixture: ComponentFixture<AddRestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
