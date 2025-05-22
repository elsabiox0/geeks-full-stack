function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95;
  }
  return cost;
}

function totalVacationCost() {
  let nights;
  do {
    nights = Number(prompt("How many nights would you like to stay in the hotel?"));
  } while (isNaN(nights) || nights <= 0);

  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!destination || !isNaN(destination));

  let rentalDays;
  do {
    rentalDays = Number(prompt("How many days would you like to rent the car?"));
  } while (isNaN(rentalDays) || rentalDays <= 0);

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(rentalDays);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  console.log(`Total vacation cost: $${car + hotel + plane}`);
}

totalVacationCost();
