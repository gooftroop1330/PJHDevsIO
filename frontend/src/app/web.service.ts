import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = "https://pjhdevs.io";
  }

  post(uri: string, payload: Object) {
    this.http.post(`${this.ROOT_URL}/${uri}`, payload).subscribe();
  }
}
