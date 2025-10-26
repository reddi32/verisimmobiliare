import { TestBed } from '@angular/core/testing';

import { EmailUtentiService } from './email-utenti.service';

describe('EmailUtentiService', () => {
  let service: EmailUtentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailUtentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
