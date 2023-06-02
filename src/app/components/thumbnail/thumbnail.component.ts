import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent {
  @Input() type!: string | null;

  // todo: improve typing for this field
  @Input() entity!: any;
}
