import {Injectable} from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class UxService {
  public darkMode = false;

  constructor(private spinner: NgxSpinnerService) {
  }

  showToast(title: string, content: string, errorToast = false) {
    // will show red colored toast if errorToast is true, default is green
    if (errorToast) {
      alert(content);
    } else {
      alert(content);
    }
  }

  showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
  }

  handleError = (err: any) => {
    console.log(err);
    this.hideSpinner();
    let errorMessage = err.error;
    if (typeof errorMessage != 'string') {
      errorMessage = err.statusText;
      if (errorMessage === 'OK') {
        errorMessage = err.message || 'Something went wrong';
      }
    }
    this.showToast('Error', errorMessage, true);
  };

  toggleDarkMode() {
    document.body.classList.toggle('dark');
    this.darkMode = !this.darkMode;
  }
}
