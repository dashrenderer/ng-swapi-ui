import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> implements OnChanges {
  @Input() entityType!: string | null;

  @Input() entities: T[] | undefined = [];

  @Input() count!: number;

  @Input() currentPage!: number;

  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      let page = 0;
      while (page * 10 < this.count) {
        page++;
        this.pages.push(page);
      }
    }
  }
}
