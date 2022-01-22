import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      new Event('valami', '2022.06.06', '10am', new Location('Fővám tér 1', '1056 Budapest', 'Hungary')),
      new Event('Drupa', '2024.05.28.', '8am', new Location('Am Staad (Stockumer Höfe)', 'D-40474 Düsseldorf', 'Germany')),
      new Event('Vizsga', '2022.01.31', '1pm', new Location('**', '**', 'Hungary')),
  ];
  }

}
