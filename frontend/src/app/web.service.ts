import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    //change ROOT_URL to parameter when we send to server ?? url: string
    this.ROOT_URL = "http://localhost:3000";
  }

  post(uri: string, payload: Object) {
    this.http.post(`${this.ROOT_URL}/${uri}`, payload).subscribe();
  }
}
