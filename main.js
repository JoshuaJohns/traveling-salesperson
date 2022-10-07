// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [10, 8, 2, 6  ];
let totalMiles = 0
// Declare a variable to store the total. Initial value is 0.

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const mile of weeklyMiles) {
    totalMiles += mile
};

// Declare a new variable to store the average miles over time
let averageMiles = totalMiles / weeklyMiles.length;
// Output the average miles and the total miles to the console
console.log(`I averag ${averageMiles} miles each week. I have driven a total of ${totalMiles} miles.`)