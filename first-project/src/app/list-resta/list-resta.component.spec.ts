import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaComponent } from './list-resta.component';

describe('ListRestaComponent', () => {
  let component: ListRestaComponent;
  let fixture: ComponentFixture<ListRestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
