export class UserLocation {
  lat: string;
  log: string;
  address: string;
  landmark: string;
  house: string;
  city: string;
  id: string; // google place id
  locationId: number;

  constructor() {
    this.house = '';
    this.landmark = '';
    this.address = '';
  }
}
