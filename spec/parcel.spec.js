const { Parcel } = require('../lib/parcel');

describe(Parcel, () => {
  const parcel = new Parcel([1, 2, 3]);

  it('an instance of parcel knows its own dimensions', () => {
    expect(parcel.dimensions).toEqual([1, 2, 3]);
  });
  it('an instance of parcel knows what size it is', () => {
    expect(parcel.size).toEqual('small');
  });
});
