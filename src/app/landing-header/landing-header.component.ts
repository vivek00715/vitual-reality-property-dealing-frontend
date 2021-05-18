import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
})
// export class LandingHeaderComponent implements OnInit {
//   headerOpen = false;

//   searchForm = new FormGroup({});
//   stateResult: string[] = [];
//   cityResult: string[] = [];
//   images: string[] = [
//     '/assets/images/header-background4.jpg',
//     '/assets/images/header-background2.jpg',
//     '/assets/images/header-background3.jpg',
//     '/assets/images/header-background7.jpg',
//     '/assets/images/header-background5.jpg',
//     '/assets/images/header-background6.jpg',
//   ];
//   changeBackgroundCounter = 0;
//   storedInterval: any;
//   minPrice = 0;
//   maxPrice = 100000000;

//   constructor(
//     private router: Router,
//     public authService: AuthService,
//     private cityStateService: StateCityService,
//     public uxService: UxService
//   ) {
//     this.stateResult = this.cityStateService.getStates();
//     this.storedInterval = setInterval(() => {
//       this.changeBackgroundCounter = this.changeBackgroundCounter + 1;
//       if (this.changeBackgroundCounter > this.images.length - 1) {
//         this.changeBackgroundCounter = 0;
//       }
//     }, 5000);
//   }

//   getStates() {
//     return this.cityStateService.getStates();
//   }

//   getCities() {
//     const { state } = this.searchForm.value;
//     if (state) {
//       return this.cityStateService.getCities(state);
//     }
//     return [];
//   }

//   getImage() {
//     return this.images[this.changeBackgroundCounter];
//   }

//   ngOnInit(): void {
//     this.searchForm = new FormGroup({
//       city: new FormControl(''),
//       state: new FormControl('', Validators.required),
//       type: new FormControl(''),
//       budget: new FormControl(''),
//     });
//   }

//   ngOnDestroy() {
//     clearInterval(this.storedInterval);
//   }

//   onSubmit() {
//     // console.log(this.searchForm.value.city , this.searchForm.value.propertytype , this.searchForm.value.budget);
//     let statename = this.searchForm.value.state;
//     if (this.cityStateService.getStates().includes(statename)) {
//       // redirecting to issues page after submitting the form
//       this.router.navigate(['/property/', statename], {
//         queryParams: {
//           city: this.searchForm.value.city,
//           state: this.searchForm.value.state,
//           type: this.searchForm.value.type,
//           minPrice: this.minPrice,
//           maxPrice: this.maxPrice,
//         },
//       });
//     } else {
//       this.uxService.showToast('Error', 'State name is invalid', true);
//     }
//   }

//   searchState(event: any): void {
//     this.stateResult = this.cityStateService
//       .getStates()
//       .filter((state) =>
//         state.toLowerCase().includes(event.target.value.toLowerCase())
//       );
//     this.searchCity('');
//   }

//   searchCity(event: any): void {
//     this.cityResult = this.cityStateService
//       .getCities(this.searchForm.value.state)
//       .filter((city) =>
//         city.toLowerCase().includes(event.target.value.toLowerCase())
//       );
//   }

//   getSrc() {
//     if (this.uxService.darkMode)
//       return '../../assets/icons/light_mode_black_24dp.svg';
//     else return '../../assets/icons/dark_mode_black_24dp.svg';
//   }
// }
export class LandingHeaderComponent implements OnInit {
  hamburger = false;
  for: string = '';
  buy: string = 'Buy';
  state: string = 'Delhi';
  rent: string = 'Rent';

  constructor(public authService: AuthService, private router: Router) {
    if (screen.width <= 750) {
      this.hamburger = true;
    } else {
      this.hamburger = false;
    }
  }

  ngOnInit() {}

  Rent() {
    this.router.navigate(['/property/', this.state], {
      queryParams: {
        for: this.rent,
        state: this.state,
      },
    });
  }

  Buy() {
    this.router.navigate(['/property/', this.state], {
      queryParams: {
        for: this.buy,
        state: this.state,
      },
    });
  }

  Sell() {
    this.router.navigate(['/create']);
  }
}
