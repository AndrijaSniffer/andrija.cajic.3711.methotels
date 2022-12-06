import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  readonly PRICEPERNIGHT: number = 500;

  constructor() {
  }

  getPrice(numberOfNights: number) {
    return numberOfNights * this.PRICEPERNIGHT;
  }
}
