import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(private http: HttpClient) { }

  getOpenAPI() {
    let url = 'https://endevel-task.doc.endevel.cz/api_documentation/?format=openapi';
    return this.http.get(url);
  }

  getJSONData() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }

  /*potřeba? pro listování z detailu na jiný detail -> předat Id a podle Id stáhnout detail*/
  sub: any;
  getData() {
    this.sub = this.getJSONData().subscribe(data => {
      let d = JSON.parse(JSON.stringify(data));
      return d
    })
  }
}
