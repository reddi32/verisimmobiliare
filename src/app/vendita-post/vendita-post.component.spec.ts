import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenditaPostComponent } from './vendita-post.component';

describe('VenditaPostComponent', () => {
  let component: VenditaPostComponent;
  let fixture: ComponentFixture<VenditaPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenditaPostComponent]
    });
    fixture = TestBed.createComponent(VenditaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
