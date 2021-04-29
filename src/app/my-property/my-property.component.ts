import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UxService } from '../ux.service';
import { PropertyService } from '../property.service';
import { User, UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-my-property',
  templateUrl: './my-property.component.html',
  styleUrls: ['./my-property.component.scss'],
})
export class MyPropertyComponent implements OnInit {
  headerOpen = false;
  user!: User;

  constructor(
    public authService: AuthService,
    public uxService: UxService,
    public property: PropertyService,
    public userService: UserServiceService
  ) {
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
        console.log(this.user);
      });
  }
}
