class Traveler {
  constructor(allTripData, allDestinationData) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.tripBook = allTripData.reduce((allUserTrips, trip) => {
      if(trip.userID === this.userID){
        let newTrip = new Trip(trip, this.destinations);
        allUserTrips.push(newTrip);
      }
      return acc;
    }, []);
  }

  calculateAnnualTravelSpending() {
    return this.tripBook.reduce((totalCost, trip) => {
      return totalCost += trip.calculateTripCost();
    },0)
  }
}
