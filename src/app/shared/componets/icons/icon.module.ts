
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
          faQuestion, faCoffee, faBriefcase, faPaste, faHeart,
          faBell, faUser, faMagnifyingGlass, faSortDown, faMoneyBill, faRightFromBracket, faUserPen,
          faCreditCard, faTruckFast, faStore
        } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram, faTwitter, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class IconModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faGoogle, faFacebookF, faLinkedinIn, faInstagram, faTwitter,
      faPaste, faHeart, faQuestion, faCoffee, faBriefcase, faBell,
      faUser, faMagnifyingGlass,faSortDown, faMoneyBill, faRightFromBracket, faUserPen,
      faCreditCard, faTruckFast, faStore
    );
  }
}
