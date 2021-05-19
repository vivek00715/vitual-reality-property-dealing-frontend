import {Injectable, isDevMode} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  getBaseUrl(): string {
    // will automatically point to correct url whether running locally or on cloud
    if (isDevMode()) {
      // running locally, use local server
      return 'http://localhost:8080';
    } else {
      // running in production, use the new url
      return 'https://vrpd-backend1-dot-hu18-groupa-angular.et.r.appspot.com';
    }
  }

  constructor() {
  }
}
