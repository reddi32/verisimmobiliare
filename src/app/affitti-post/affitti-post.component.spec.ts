import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffittiPostComponent } from './affitti-post.component';

describe('AffittiPostComponent', () => {
  let component: AffittiPostComponent;
  let fixture: ComponentFixture<AffittiPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffittiPostComponent]
    });
    fixture = TestBed.createComponent(AffittiPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
