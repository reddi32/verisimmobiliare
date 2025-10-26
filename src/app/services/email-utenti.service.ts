import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailUtentiService {

  constructor(private http: HttpClient) { }

  insertEmail(url: string, body: {}) {
    return this.http.post(url, body)
  }
}
