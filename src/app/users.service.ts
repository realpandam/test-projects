import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = 'https://endevel-task.doc.endevel.cz/api_documentation/?format=openapi';
    return this.http.get(url);
  }
}
