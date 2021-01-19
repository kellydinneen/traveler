import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/trip';
import {
  destinationData,
  tripData
} from './test-data.js';

let trip1, trip2, trip3;

describe('Traveler', () => {
  beforeEach(() => {
    trip1 = new Trip(tripData[0], destinationData);
    trip2 = new Trip(tripData[1], destinationData);
    trip3 = new Trip(tripData[2], destinationData);
  });

  it('should store all destination information', () => {
    expect(trip1.destination).to.deep.equal(
      {
        "id":1,
      "destination":"Lima, Peru",
      "estimatedLodgingCostPerDay":70,
      "estimatedFlightCostPerPerson":400,
      "image":"https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt":"overview of city buildings with a clear sky"
      }
    );
  });

  it('should calculate trip cost including 10% travel agent fee', () => {
    expect(trip1.calculateTripCost()).to.equal(1056);
    expect(trip2.calculateTripCost()).to.equal(6270.000000000001);
  });

  it('should assign a status based on its timing relative to today', () => {
    trip1.getTripTiming();
    trip2.getTripTiming();
    trip3.getTripTiming();
    expect(trip1.status).to.equal('past');
    expect(trip2.status).to.equal('present');
    expect(trip3.status).to.equal('upcoming');
  });

});
