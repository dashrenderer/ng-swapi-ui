import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent<T> {
  @Input() entityType!: string | null;

  @Input() entities: T[] | undefined = [];

  @Input() count: number | undefined;

  @Input() currentPage: number | undefined;
}
