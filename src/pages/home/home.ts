import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BookingItemService } from "../../services/booking-item/booking-item.service";

import {Observable} from "rxjs/Observable";
import { Item } from "../../models/item/item.model";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  pushPage: string = 'BookingPage';

  bookingItem$: Observable<Item[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private booking: BookingItemService) {
    this.bookingItem$ = this.booking
      .getBookingItem()
      .snapshotChanges().map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
            }));
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  pushPageUp(): void {
    this.navCtrl.push(this.pushPage);
  }

}
