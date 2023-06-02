import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { ApiResult } from '../models';

const BASE_URL = 'https://swapi.dev/api/';

export interface EntityListQueryParams {
  search?: string;
  page?: number | string;
}

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private cachedEntities = new Map<string, any>();

  constructor(private http: HttpClient) {}

  getEntitiesByType<T = any>(
    type: string,
    params?: EntityListQueryParams
  ): Observable<ApiResult<T>> {
    let url = BASE_URL + type;
    if (params) {
      url +=
        '/?' +
        Object.entries(params)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
    }

    return this.http.get<ApiResult<T>>(url).pipe(
      tap((response) => {
        response.results.forEach((result) => {
          this.cachedEntities.set((result as any).url, result);
        });
      })
    );
  }

  getEntityById<T = any>(type: string, id: string): Observable<T> {
    const url = `${BASE_URL}${type}/${id}`;

    return this.getEntityByUrl<T>(url);
  }

  getEntityByUrl<T = any>(url: string): Observable<T> {
    // todo: move this to an HTTP interceptor
    if (this.cachedEntities.has(url)) {
      return of(this.cachedEntities.get(url));
    }

    return this.http
      .get<T>(url)
      .pipe(tap((result) => this.cachedEntities.set(url, result)));
  }
}
