// FUNCTION ONE
function distanceFromHqInBlocks(location) {
    //returns the number of blocks given a value
    if (location < 42) {
        return (42 - location);
    } else {
        return (location - 42);
    }
}

console.log(distanceFromHqInBlocks(43));


// FUNCTION TWO
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

}

console.log(distanceFromHqInFeet(43));


// FUNCTION THREE
function distanceTravelledInFeet(pointZero, pointOne) {
    //returns the number of feet traveled
    if (pointOne > pointZero) {
        return ((pointOne - pointZero) * 264);
    } else {
        return ((pointZero - pointOne) * 264);
    }
}

console.log(distanceTravelledInFeet(0, 8));


// FUNCTION FOUR
function calculatesFarePrice(pointZero, pointOne) {
    //returns the fare for the customer
    const distanceTravelled = distanceTravelledInFeet(pointZero, pointOne);

    if (distanceTravelled <= 400) {
        return 0;
    } if (distanceTravelled >= 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled >= 2000 && distanceTravelled <= 2500) {
        return 25;
    } else if (distanceTravelled > 2500) {
        return "cannot travel that far"
    }
}
