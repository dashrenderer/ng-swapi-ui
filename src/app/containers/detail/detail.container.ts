import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-detail-container',
  template: `
    <app-detail
      [entityType]="entityType$ | async"
      [entity]="entity$ | async"
    ></app-detail>
  `,
  styles: [],
})
export class DetailContainerComponent {
  entityType$ = this.route.params.pipe(
    map((params) => params['entityType'] as string)
  );
  entity$ = this.route.data.pipe(map((data) => data['entity']));

  constructor(private route: ActivatedRoute) {}
}
