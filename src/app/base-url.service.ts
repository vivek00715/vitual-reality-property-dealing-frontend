import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  private serverPort = 8080;

  getBaseUrl(): string {
    // will automatically point to correct url whether running locally or on cloud
    const {protocol, hostname} = window.location;
    return `${protocol}//${hostname}:${this.serverPort}`;
  }

  constructor() {
  }
}
