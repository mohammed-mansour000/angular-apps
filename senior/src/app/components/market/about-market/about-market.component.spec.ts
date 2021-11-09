import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMarketComponent } from './about-market.component';

describe('AboutMarketComponent', () => {
  let component: AboutMarketComponent;
  let fixture: ComponentFixture<AboutMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
