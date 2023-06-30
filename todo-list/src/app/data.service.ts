import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getData() {
    const url = `${this.baseUrl}/api/data`;
    return this.http.get(url);
  }

  // Other methods for posting, updating, or deleting data
}