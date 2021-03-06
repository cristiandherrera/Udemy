// *********
// Functions
// *********

// function describeCountry(country, population, capitalCity) {
//   const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`
//   return countryInfo;
// }

// const usa = describeCountry('America', 321, 'Washington D.C');
// console.log(usa);

// const finland = describeCountry('Finland', 6, 'Helsinki');
// console.log(finland);

// const southKorea = describeCountry('South Korea', 51, 'Seoul');
// console.log(southKorea);

// ===================================================================================== //

// *************************************
// Function Declarations vs. Expressions
// *************************************

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// } 
// const usa = percentageOfWorld1(331);
// const china = percentageOfWorld1(1441);
// const india = percentageOfWorld1(1380);
// console.log(usa, china, india);


// const percentageOfWorld2 = function(population) {
//   return (population / 7900) * 100;
// }
// const usa2 = percentageOfWorld2(331);
// const china2 = percentageOfWorld2(1441);
// const india2 = percentageOfWorld2(1380);
// console.log(usa2, china2, india2);

// ===================================================================================== //

// ***************
// Arrow Funcitons 
// ***************

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const usa = percentageOfWorld3(331);
// const china = percentageOfWorld3(1441);
// const india = percentageOfWorld3(1380);
// console.log(usa, china, india);

// ===================================================================================== //

// *********************************
// Functions Calling Other Functions
// *********************************

// // DECLARATION FUNCTION
// function percentageOfWorld(percentPop) {
//   return (percentPop / 7900) * 100;
// } 
// function describePopulation(country, population) {
//   const percent = percentageOfWorld(population);
//   return `${country} has ${population} people which is ${percent}% of the world.`
// }
// /////////////////////////////

// // EXPRESSION FUNCTION
// const percentageOfWorld = function(percentPop){
//   return (percentPop / 7900) * 100;
// }
// const describePopulation = function(country, population) {
//   const percent = percentageOfWorld(population);
//   return `${country} has ${population} people which is ${percent}% of the world.`
// }
// ///////////////////////////

// // // ARROW FUNCTION
// const percentageOfWorld = percentPop => (percentPop / 7900) * 100;
// const describePopulation  = (country, population) => {
//   const percent = percentageOfWorld(population);
//   return `${country} has ${population} people which is ${percent}% of the world.`
// }

// console.log(describePopulation('USA', 331));
// console.log(describePopulation('China', 1441));
// console.log(describePopulation('India', 1380));

// ===================================================================================== //

// **********************
// Introduction to Arrays
// **********************

// const populations = [331, 1441, 1380, 52];

// if(populations.length === 4) {
//   console.log(true)
// } else { 
//   console.log(false);
// }

// const percentageOfWorld = function(percentPop){
//   return (percentPop / 7900) * 100;
// }

//  const percentages = [
//    percentageOfWorld(populations[0]), 
//    percentageOfWorld(populations[1]), 
//    percentageOfWorld(populations[2]), 
//    percentageOfWorld(populations[populations.length-1])];
// console.log(percentages);

// ===================================================================================== //

// *******************************
// Basic Array Operations(Methods)
// *******************************

// const neigbours = ['Mexico', 'Canada'];
// console.log(neigbours);

// neigbours.push('Utopia');
// console.log(neigbours);

// neigbours.pop();
// console.log(neigbours);

// if(neigbours.includes('Germany')) {
//   console.log('Probably a centeral European country.');
// } else {
//   console.log('Probably not a centeral European country!');
// }
 
// console.log(neigbours.indexOf('Mexico'));
// neigbours[0] = 'The Country of Mexico';
// console.log(neigbours[0]);

// ===================================================================================== //

// ***********************
// Introduction to Objects 
// ***********************

// const myCountry = {
//   country: 'U.S.A',
//   capital: 'Washington D.C',
//   language: 'English',
//   population: 331,
//   neighbours: ['Mexico', 'Canada']
// };

// ===================================================================================== //

// ************************
// Dot vs. Bracket Notation 
// ************************

// const myCountry = {
//   country: 'U.S.A',
//   capital: 'Washington D.C',
//   language: 'english',
//   population: 331,
//   neighbours: ['Mexico', 'Canada']
// };

// myCountry.population -= 2;
// console.log(myCountry.population);

// myCountry['population'] += 2;
// console.log(myCountry['population']);

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} countries and a capital named ${myCountry.capital}.`);

// ===================================================================================== //

// **************
// Object Methods
// **************

// const myCountry = {
//   country: 'U.S.A',
//   capital: 'Washington D.C',
//   language: 'english',
//   population: 331,
//   neighbours: ['Mexico', 'Canada'],

//   describe: function () {
//      console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} countries and a capital named ${this.capital}.`);
//   },

//   checkIsland: function () {
//     // !this.neighbours ? this.isIsland = true : this.isIsland = false; // my answer
//     this.isIsland = this.neighbours.length === 0 ? 'true' : 'false';
//     // this.isIsland = !Boolean(this.neigbours.length)
//   }
// };
// myCountry.checkIsland();
// myCountry.describe();
// console.log(myCountry.isIsland);
// console.log(myCountry);

// ===================================================================================== //

// ***********************
// Iteration: The for Loop
// ***********************

// for(let vote = 1; vote <= 50; vote++) {
//   console.log(`Vote number ${vote} is currently voting!`)
// }

// ===================================================================================== //

// ***************************************
// Looping Arrays, Breaking and Continuing 
// ***************************************

// const populations = [331, 1441, 1380, 52];
// const percentages = [];

// for (let i = 0; i < populations.length; i++) {
//   const percentageOfWorld = function(percentPop){
//     return (percentPop / 7900) * 100;
//   }
//   percentages.push(percentageOfWorld(populations[i]));
// }
// console.log(percentages);


// ===================================================================================== //

// ************************************
// Looping Backwards and Loops in Loops
// ************************************

// const listOfNeigbors = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweeden', 'Russia']
// ];

// for (let i = 0; i < listOfNeigbors.length; i++) {
//   for (let x = 0; x < listOfNeigbors[i].length; x++) {
//     console.log(`Neighbor: ${listOfNeigbors[i][x]}`);
//   }
// }

// ===================================================================================== //

// **************
// The while Loop
// **************

// const populations = [331, 1441, 1380, 52];
// const percentages = [];

// let i = 0;
// while (i < populations.length) {
//   const percentageOfWorld = function(percentPop){
//     return (percentPop / 7900) * 100;
//   }
//   percentages.push(percentageOfWorld(populations[i]));
//   i++;
// }
// console.log(percentages);

// ===================================================================================== //
