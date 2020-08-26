import { PickUp } from './pickup.model';
import { UserLocation } from './location.model';

export class Hub {

  id: number;
  title: string;
  hubCode: string;
  location: UserLocation;
  googleLocationId: string;
  phone: string;
  email: string;
  deliveryRadius: number;
  defaultHub: boolean;
  pickup: PickUp[] = [];
  status: number;

  constructor() {
    this.location = new UserLocation();

  }
}
