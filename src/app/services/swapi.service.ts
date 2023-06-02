import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiResult } from '../models';

const BASE_URL = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getEntitiesByType<T = any>(
    type: string,
    search?: string
  ): Observable<ApiResult<T>> {
    let url = BASE_URL + type;
    if (search) {
      url += '/?search=' + search;
    }

    return this.http.get<ApiResult<T>>(url);
  }

  getEntityById<T = any>(type: string, id: string): Observable<T> {
    const url = `${BASE_URL}${type}/${id}`;

    return this.http.get<T>(url);
  }

  getEntityByUrl<T = any>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
