import { Component } from '@angular/core';

import { ENTITY_TYPES } from './models/entity-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly entityTypes = ENTITY_TYPES;
}
