import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffittiComponent } from './affitti.component';

describe('AffittiComponent', () => {
  let component: AffittiComponent;
  let fixture: ComponentFixture<AffittiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffittiComponent]
    });
    fixture = TestBed.createComponent(AffittiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
