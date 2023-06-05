import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ENTITY_TYPES } from 'src/app/models/entity-types';

interface SearchForm {
  entityType: FormControl<string>;
  searchText: FormControl<string>;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchForm: FormGroup<SearchForm>;

  readonly entityTypes = ENTITY_TYPES;

  constructor(fb: FormBuilder, private router: Router) {
    this.searchForm = fb.nonNullable.group({
      entityType: this.entityTypes[0].url,
      searchText: '',
    });
  }

  submitSearch(): void {
    const { entityType, searchText } = this.searchForm.value;

    this.router.navigate(['/', entityType], { queryParams: { search: searchText } });
  }
}
