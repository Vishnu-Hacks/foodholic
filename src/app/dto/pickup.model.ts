import { UserLocation } from './location.model';

export class PickUp {
  title: string;
  stationCode: string;
  location: UserLocation;
  landmark: string
  hubCode: string;
  status: number;

  constructor() {
    this.location = new UserLocation();
  }
}
