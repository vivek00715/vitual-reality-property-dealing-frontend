import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UxService } from '../ux.service';
import { PropertyService } from '../property.service';
import { User, UserServiceService } from '../user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-property',
  templateUrl: './my-property.component.html',
  styleUrls: ['./my-property.component.scss'],
})
export class MyPropertyComponent implements OnInit {
  headerOpen = false;
  user!: User;
  editForm: FormGroup;
  @ViewChild('closeModel') closeModel!: ElementRef;

  constructor(
    public authService: AuthService,
    public uxService: UxService,
    public property: PropertyService,
    public userService: UserServiceService
  ) {
    this.editForm = new FormGroup({
      name: new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
      // userImage: new FormControl(null),
      // email: new FormControl(null),
    });
    this.getUserDetail();
  }

  ngOnInit(): void {}

  getSrc() {
    if (this.uxService.darkMode)
      return '../../assets/icons/light_mode_black_24dp.svg';
    else return '../../assets/icons/dark_mode_black_24dp.svg';
  }

  getUserDetail() {
    this.userService
      .getUserById(this.authService.user?.email)
      .subscribe((Response) => {
        this.user = Response;
        const { name, address, mobile } = Response;
        console.log(this.user);
        // this.editForm.value.name = this.user.name;
        this.editForm.setValue({ name, address, mobile });
      });
  }

  onSubmit() {
    this.uxService.showSpinner();
    this.userService.updateUserById(this.editForm.value).subscribe(
      (Response) => {
        console.log(Response);
        this.uxService.hideSpinner();
        this.user = Response;
        this.uxService.showToast('Success', 'Update Successfully');

        this.closeModel.nativeElement.click();
      },
      (err) => {
        this.uxService.hideSpinner();
      }
    );
  }
}
