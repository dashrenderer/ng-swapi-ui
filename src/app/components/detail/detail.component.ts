import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} from 'src/app/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnChanges {
  @Input() entityType: string | null = '';

  @Input() entity: any | undefined;

  films: string[] = [];
  people: string[] = [];
  planets: string[] = [];
  species: string[] = [];
  starships: string[] = [];
  vehicles: string[] = [];

  properties: [string, string][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entity']) {
      this.setDisplayedProperties();
      this.setEntityLists();
    }
  }

  private setDisplayedProperties(): void {
    const otherProperties = this.getOtherProperties();
    const keyValuePairs = Object.entries(otherProperties) as [string, string][];

    keyValuePairs.forEach((pair) => {
      pair[0] = pair[0].replace(/_/g, ' ');
    });

    this.properties = keyValuePairs;
  }

  private setEntityLists(): void {
    // todo: this method needs refactoring!
    this.films =
      this.people =
      this.planets =
      this.starships =
      this.species =
      this.vehicles =
        [];

    switch (this.entityType) {
      case 'films': {
        const film = this.entity as Film;
        this.people = film.characters;
        this.planets = film.planets;
        this.species = film.species;
        this.starships = film.starships;
        this.vehicles = film.vehicles;
        break;
      }
      case 'people': {
        const person = this.entity as Person;
        this.films = person.films;
        this.species = person.species;
        this.vehicles = person.vehicles;
        this.starships = person.starships;
        break;
      }
      case 'planets': {
        const planet = this.entity as Planet;
        this.people = planet.residents;
        this.films = planet.films;
        break;
      }
      case 'starships': {
        const starship = this.entity as Starship;
        this.people = starship.pilots;
        this.films = starship.films;
        break;
      }
      case 'species': {
        const species = this.entity as Species;
        this.people = species.people;
        this.films = species.films;
        break;
      }
      case 'vehicles': {
        const vehicle = this.entity as Vehicle;
        this.people = vehicle.pilots;
        this.films = vehicle.films;
        break;
      }
    }
  }

  private getOtherProperties(): { [key: string]: string } {
    const {
      created,
      edited,
      url,
      name,
      title,
      people,
      pilots,
      characters,
      residents,
      films,
      planets,
      starships,
      species,
      vehicles,
      ...otherProperties
    } = this.entity as any;

    return otherProperties;
  }
}
