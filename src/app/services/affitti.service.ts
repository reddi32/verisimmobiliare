import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { affitti } from '../../environments/environments';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffittiService {

  constructor() { }

  private client = createClient({
    space: affitti.spaceIdTwo,
    accessToken: affitti.accessTokenTwo
  });

  getAllEntriesAffitti() {
    const promise = this.client.getEntries();
    return from(promise);
  }

  getEntryByAffittiId(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
  
}
