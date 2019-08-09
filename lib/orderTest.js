const { Parcel } = require('./parcelTest');

class Order {
  constructor(order, parcel, speedyStatus = false) {
    this.order = order;
    this.speedyStatus = speedyStatus;
    this.Parcel = parcel;
  }

  createOrder() {
    return this.order.map(parcel => new this.Parcel(parcel));
  }

  calculateTotal() {
    const arrayOfOrders = this.createOrder();
    const total = arrayOfOrders.reduce((sum, parcel) => sum + parcel.price, 0);
    return this.speedyStatus ? total * 2 : total;
  }

  returnResult() {
    return {
      order: this.createOrder(),
      totalCost: this.calculateTotal(),
    };
  }
}

const sampleOrder = [[1, 2, 3], [11, 2, 2], [51, 1, 1]];

const newOrder = new Order(sampleOrder, Parcel);
console.log('RESULT =>', newOrder.returnResult());
