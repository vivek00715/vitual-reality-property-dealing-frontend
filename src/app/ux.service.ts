import { Injectable } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UxService {

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
}
