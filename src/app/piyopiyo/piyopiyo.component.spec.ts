import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiyopiyoComponent } from './piyopiyo.component';

describe('PiyopiyoComponent', () => {
  let component: PiyopiyoComponent;
  let fixture: ComponentFixture<PiyopiyoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiyopiyoComponent]
    });
    fixture = TestBed.createComponent(PiyopiyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
