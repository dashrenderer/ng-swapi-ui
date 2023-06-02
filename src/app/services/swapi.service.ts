import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getEntitiesByType<T = any>(type: string, search?: string): Observable<T[]> {
    let url = BASE_URL + type;
    if (search) {
      url += '/?search=' + search;
    }

    return this.http.get<T[]>(url);
  }

  getEntityById<T = any>(type: string, id: number): Observable<T> {
    const url = `${BASE_URL}${type}/${id}`;

    return this.http.get<T>(url);
  }
}
