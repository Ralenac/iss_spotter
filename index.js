
// const { fetchMyIP } = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });


// const { fetchCoordsByIP } = require('./iss');
// fetchCoordsByIP('74.57.171.176',(error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , data);
// });


// const { fetchISSFlyOverTimes } = require('./iss');
// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:' , passTimes);
// });


//Primary function that our index.js can call. This function will orchestrate all three API requests by "chaining" them one after another. When the first request completes, the next one will be triggered

//once index.js has the array of flyover times, it can loop through the data objects and print out the string.

const { nextISSTimesForMyLocation } = require('./iss');
const printPassTimes = ((passTimes) => {
  for (const time of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime); //he setUTCSeconds() method sets the seconds for a specified date according to universal time.
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});

