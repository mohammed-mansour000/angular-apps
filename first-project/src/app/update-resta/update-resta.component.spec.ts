import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaComponent } from './update-resta.component';

describe('UpdateRestaComponent', () => {
  let component: UpdateRestaComponent;
  let fixture: ComponentFixture<UpdateRestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
