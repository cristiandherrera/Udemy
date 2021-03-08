"use strict";

// *******************
// Coding Challenge #1
// *******************

/* 
 In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

 PART 1

   1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).

   2. Do 'reverse geocoding' of the provided coordinates. (Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.) Use this API to do reverse geocoding: https://geocode.xyz/api.

   The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉

   3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'

   4. Chain a .catch method to the end of the promise chain and log errors to the console

   5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

 PART 2
 
   6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.

   7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

 TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
 TEST COORDINATES 2: 19.037, 72.873
 TEST COORDINATES 2: -33.933, 18.474
*/

// // MY OWN helper function (handles status errors)
// const myJSON = function (url, errorMsg = "What the heck went wrong?") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`STATUS (${response.status})`);
//     return response.json();
//   });
// };

// const whereAmI = function (lat, lng) {
//   myJSON(
//     `https://geocode.xyz/${lat},${lng}?geoit=json`,
//     "Not valid coordinates"
//   )
//     .then((data) => {
//       console.log("GEOCODE", data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return myJSON(
//         `https://restcountries.eu/rest/v2/name/${data.country}`,
//         "No country found"
//       );
//     })
//     .then((data) => {
//       console.log("REST", data);
//       const neighbor = data[0].borders[0];
//       renderCountry(data[0]);

//       if (!neighbor) throw new Error(`No neighbor found!`);

//       return myJSON(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then((data) => {
//       console.log("CODE", data);
//       renderCountry(data, "neighbour");
//     })
//     .catch((error) => console.error(`${error.message}, HANDLING OUR ERROR`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener("click", function () {
//   whereAmI(52.508, 13.381); // Berlin
//   // whereAmI(19.037, 72.873); // Mumbai
//   // whereAmI(-33.933, 18.474); // Cape Town
// });
