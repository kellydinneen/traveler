class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.destination = destinationData.find(destination => destination.id === tripData.destinationID);
    this.numberOfTravelers = tripData.travelers;
    this.departureDate = tripData.date;
    this.durationInDays = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities
  }

  calculateTripCost() {
    let estimatedLodgingCost = this.destination.estimatedLodgingCostPerDay * this.durationInDays;
    let estimatedFlightCost = this.destination.estimatedFlightCostPerPerson * this.numberOfTravelers;
    let travelAgentFee = 0.1;
    return (estimatedLodgingCost + estimatedFlightCost) * (1 + travelAgentFee);
  }

}
export default Trip;
