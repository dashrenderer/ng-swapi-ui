import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailComponent implements OnChanges {
  @Input() type!: string | null;

  // todo: improve typing for this field
  @Input() entity!: any;

  entityId: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entity'] && this.entity) {
      this.entityId = this.extractEntityId(this.entity['url']);
    }
  }

  private extractEntityId(url: string): string {
    const parts = url.split('/').filter((part) => part.length > 0);

    return parts[parts.length - 1];
  }
}
