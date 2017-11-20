import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Booking } from "../../models/booking/booking.model";

@Injectable()
export class BookingListService {
  private bookingListItemRef = this.db.list<Booking>('booking-list-item');

  constructor(private db: AngularFireDatabase){

  }

  getBookingListItem(){
    return this.bookingListItemRef;
  }

  addBookingItem(item: Booking){
    return this.bookingListItemRef.push(item);
  }
}
