
export class Order {
  orderCode: string;
  mrpFee: string;
  serviceFee: string;
  finalPrice: string;
  deliveryPrice: string;
  savings: string;
  orderItems: OrderItem[];
  paymentMethodType: string; // card, upi, wallet etc
  paymentMethodName: string; // card digits, upi value, wallet name
  time: Date;
  isPickUp: boolean;
  pickUpAddress: Location;
  deliveryAddress: string;
  deliverySpeed: string;
  pickUpTime: Date;
  deliveryDistance: number;
  status: number;

  constructor() {
    this.isPickUp = false;
  }
}

export class OrderItem {
  title: string;
  sellPrice: string;
  quantity: number;
}
