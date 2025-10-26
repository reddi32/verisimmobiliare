import { Injectable } from '@angular/core';
import { environment, affitti } from '../../environments/environments';
import { createClient } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() {}

  // 🔹 Client per le vendite
  private venditaClient = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  });

  // 🔹 Client per gli affitti
  private affittiClient = createClient({
  space: affitti.spaceIdTwo,
  accessToken: affitti.accessTokenTwo,
  environment: 'Affitti' // 👈 usa il nome ESATTO dell’environment come appare in Contentful
});

  // ==============================
  // 🏠 SEZIONE VENDITE
  // ==============================
  getAllVenditaEntries() {
    return from(this.venditaClient.getEntries());
  }

  getVenditaEntryById(id: string) {
    return from(this.venditaClient.getEntry(id));
  }

  // ==============================
  // 🏡 SEZIONE AFFITTI
  // ==============================
  getAllAffittiEntries() {
    return from(this.affittiClient.getEntries());
  }

  getAffittiEntryById(id: string) {
    return from(this.affittiClient.getEntry(id));
  }
}
