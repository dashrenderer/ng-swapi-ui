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
      [count]="(entities$ | async)?.count"
      [currentPage]="1"
    ></app-list>
  `,
  styles: [],
})
export class ListContainerComponent {
  entityType$ = this.route.params.pipe(
    map((params) => params['entityType'] as string)
  );
  entities$ = this.route.data.pipe(
    map((data) => data['entities'] as ApiResult)
  );

  constructor(private route: ActivatedRoute) {}
}
