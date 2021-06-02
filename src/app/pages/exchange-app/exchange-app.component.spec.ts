import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAppComponent } from './exchange-app.component';

describe('ExchangeAppComponent', () => {
  let component: ExchangeAppComponent;
  let fixture: ComponentFixture<ExchangeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
