import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHeaderComponent } from './temp-header.component';

describe('TempHeaderComponent', () => {
  let component: TempHeaderComponent;
  let fixture: ComponentFixture<TempHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempHeaderComponent]
    });
    fixture = TestBed.createComponent(TempHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
