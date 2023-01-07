import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(private http: HttpClient) { }

  getJSONData() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }

  getOpenAPI() {
    let url = 'https://endevel-task.doc.endevel.cz/api_documentation/?format=openapi';
    return this.http.get(url);
  }
}
