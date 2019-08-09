# FundApps Courier Kata

## Task

You work for a courier company and have been tasked with creating a code library to
calculate the cost of sending an order of parcels.

## Setup

- Clone this repo

- Run `yarn install` in the cloned directory

- Run `yarn test` to see completed tests and coverage output

## Implementation

I investigated both a procedural as well as an Object Oriented method of solving this. I decided to go down the object oriented route as this way:

- The instances are aware of their state (for eg: parcel size, price, speedy delivery etc)
- Separation of concerns is followed throughout
- The program remains extensible

Following the approach, I have a `Parcel` class that takes a dimensions array (eg: `[2, 3, 5]`) at instantiation time. It then is aware of its dimensions, size and price. Similarly, the Order class is aware of the order, which is a two-dimensional array(eg: `[[2, 3, 5], [3, 5, 2]]`) as well as the status of `Speedy Delivery` which is set to false as default.

Anytime a new order comes in, a new order instance is instantiated (which takes in the two-dimensional array at instantiation time). The order instance is then responsible for generating multiple instances of parcels as well as calculating the grand total.

The shape of the result object is as follows:

```javascript
{
  orders: [ <Parcel>, <Parcel>, <Parcel>],
  total: 123
}
```

## Testing

I started off testing the behavior of `Parcel` using jest but something was missing in my approach as I kept ending up with the same error as I attempted to test the class behaviour to have `parcel.dimensions` show the correct output of `[1, 2, 3]`. At this point my research had taken up a large amount of the alotted time so I decided to change my tactics to use `function Parcel(dimensions)` instead, which gave me the output I was expecting.
