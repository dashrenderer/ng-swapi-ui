import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list',
  template: `
    <h1>{{ entityType | titlecase }}</h1>
    <pre>{{ entities | json }}</pre>
  `,
  styles: [],
})
export class ListContainerComponent {
  entityType = '';
  entities: any[] = [];

  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {
    this.initRouteSubscriptions();
  }

  private initRouteSubscriptions(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe(({ entities }) => {
      this.entities = entities;
    });
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ entityType }) => {
        this.entityType = entityType;
      });
  }
}
