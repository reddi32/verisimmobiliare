import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnzioComponent } from './anzio.component';

describe('AnzioComponent', () => {
  let component: AnzioComponent;
  let fixture: ComponentFixture<AnzioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnzioComponent]
    });
    fixture = TestBed.createComponent(AnzioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
