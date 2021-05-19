import { Injectable } from '@angular/core';
import * as cityDataJson from './citydata.json';

@Injectable({
  providedIn: 'root',
})
export class StateCityService {
  data: {[e: string]: string[]} = (<any>cityDataJson).default;
  getStates(): string[] {
    return Object.keys(this.data);
  }

  getCities(state: string): string[] {
    return this.data[state];
  }
  constructor() {

  }
}
