import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export const ENTITY_TYPES: { name: string; url: string }[] = [
  { name: 'Films', url: 'films' },
  { name: 'People', url: 'people' },
  { name: 'Planets', url: 'planets' },
  { name: 'Species', url: 'species' },
  { name: 'Starships', url: 'starships' },
  { name: 'Vehicles', url: 'vehicles' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchForm: FormGroup;

  readonly entityTypes = ENTITY_TYPES;

  constructor(fb: FormBuilder, private router: Router) {
    this.searchForm = fb.group({
      entityType: [this.entityTypes[0].url],
      searchText: [''],
    });
  }

  submitSearch(): void {
    console.log(this.searchForm.value);
    const { value } = this.searchForm;
    this.router.navigate(['/', value.entityType], { queryParams: { search: value.searchText } });
  }
}
