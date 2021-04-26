import { Injectable } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UxService {
  public darkMode = false;
  constructor(private toast: ToastrService, private spinner: NgxSpinnerService) { }

  showToast(title: string, content: string, errorToast=false){
    // will show red colored toast if errorToast is true, default is green
    if(errorToast){
      this.toast.error(content, title);
    } else {
      this.toast.success(content, title);
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
      if (errorMessage === 'OK'){
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
