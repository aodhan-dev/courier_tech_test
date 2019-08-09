class Parcel {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.parcelSize = Parcel.returnParcelSize(dimensions);
    this.price = Parcel.calculatePrice(dimensions);
  }

  static get parcelInfo() {
    return {
      small: { maxDimension: 10, price: 3 },
      medium: { maxDimension: 50, price: 8 },
      large: { maxDimension: 100, price: 15 },
      extraLarge: { maxDimension: null, price: 25 },
    };
  }

  static calculatePrice(dimensions) {
    // [1, 2, 3]
    // small / medium / large
    const parcelSize = Parcel.returnParcelSize(dimensions);
    const { price } = Parcel.parcelInfo[parcelSize];
    return price;
  }

  static isParcelRightSize(dimensions, maxDimension) {
    const biggestDimension = dimensions.slice().sort((a, b) => a < b)[0];
    return biggestDimension < maxDimension;
  }

  static returnParcelSize(dimensions) {
    let result;
    switch (true) {
      case Parcel.isParcelRightSize(dimensions, Parcel.parcelInfo.small.maxDimension):
        result = 'small';
        break;
      case Parcel.isParcelRightSize(dimensions, Parcel.parcelInfo.medium.maxDimension):
        result = 'medium';
        break;
      case Parcel.isParcelRightSize(dimensions, Parcel.parcelInfo.large.maxDimension):
        result = 'large';
        break;
      default:
        result = 'extraLarge';
    }
    return result;
  }
}
module.exports = { Parcel };
// testing
const parcel = new Parcel([50, 2, 3]);
console.log(parcel.dimensions);
console.log(parcel.parcelSize);
console.log(parcel.price);
