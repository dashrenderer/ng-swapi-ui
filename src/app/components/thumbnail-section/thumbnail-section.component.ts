import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';

import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-thumbnail-section',
  templateUrl: './thumbnail-section.component.html',
  styleUrls: ['./thumbnail-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailSectionComponent implements OnChanges {
  @Input() entityType: string = '';

  @Input() entityUrls: string[] = [];

  entities$: Observable<any>[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entityUrls']) {
      this.entities$ = this.entityUrls.map((url) => this.getEntity(url));
    }
  }

  private getEntity(url: string): Observable<any> {
    return this.swapiService.getEntityByUrl(url);
  }
}
