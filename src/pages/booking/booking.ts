import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.model';
import { BookingItemService } from "../../services/booking-item/booking-item.service";

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  item: Item = {
    name: '',
    price: undefined,
    image: '',
    qrcode_image: '',
    description: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private booking: BookingItemService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  addItem(item: Item) {
    this.booking.addItem(item).then(ref => {
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    });
  }

}
