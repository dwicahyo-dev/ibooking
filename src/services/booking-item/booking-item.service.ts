import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from '../../models/item/item.model';

@Injectable()
export class BookingItemService {
  private bookingListRef = this.db.list<Item>('booking-item');

  constructor(private db: AngularFireDatabase) {

  }

  getBookingItem(){
    return this.bookingListRef;
  }

  addItem(item: Item) {
    return this.bookingListRef.push(item);
  }
}
