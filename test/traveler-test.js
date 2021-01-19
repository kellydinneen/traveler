import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/traveler';
import Trip from '../src/trip';
import {
  travelerData,
  destinationData,
  tripData
} from './test-data.js';

let traveler1, traveler2, traveler3;

describe('Traveler', () => {
  beforeEach(() => {
    traveler1 = new Traveler(travelerData[0], tripData, destinationData);
    traveler2 = new Traveler(travelerData[1], tripData, destinationData);
    traveler3 = new Traveler(travelerData[2], tripData, destinationData);
  });

  it('should have tripBook full of trips', () => {
    expect(traveler1.tripBook[0]).to.be.an.instanceOf(Trip);
  });

  it('should only store its own trips', () => {
    expect(traveler3.tripBook).to.deep.equal([]);
  });

  it('should calculate how much was spent on travel in a given year', () => {
    expect(traveler1.calculateAnnualTravelSpending(2019)).to.equal('$1056.00');
    expect(traveler1.calculateAnnualTravelSpending(2021)).to.equal('$6270.00');
    expect(traveler1.calculateAnnualTravelSpending(2018)).to.equal('Your spending is $0 for 2018. Must not have caught the travel bug, huh?');
  });

  it('should retrieve trips that have a certain status', () => {
    expect(traveler1.getTripsByStatus('approved').length).to.equal(2);
    expect(traveler1.getTripsByStatus('pending')).to.deep.equal([]);
    expect(traveler2.getTripsByStatus('pending').length).to.equal(1);
    traveler1.tripBook.forEach(trip => trip.getTripTiming());
    traveler2.tripBook.forEach(trip => trip.getTripTiming());
    expect(traveler1.getTripsByStatus('past').length).to.equal(1);
    expect(traveler1.getTripsByStatus('present').length).to.equal(1);
    expect(traveler2.getTripsByStatus('upcoming').length).to.equal(1);
  });
});
