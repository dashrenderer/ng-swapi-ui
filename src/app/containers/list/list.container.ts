import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { ApiResult } from 'src/app/models';

@Component({
  selector: 'app-list-container',
  template: `
    <app-list
      [entityType]="entityType$ | async"
      [entities]="(entities$ | async)?.results"
      [count]="(entities$ | async)?.count || 0"
      [currentPage]="(currentPage$ | async) || 1"
    ></app-list>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
})
export class ListContainerComponent {
  entityType$ = this.route.params.pipe(map((params) => params['entityType'] as string));

  entities$ = this.route.data.pipe(map((data) => data['entityList'] as ApiResult));

  currentPage$ = this.route.queryParams.pipe(map((query) => +query['page']));

  constructor(private route: ActivatedRoute) {}
}
