// We work for a company building a smart home thermometer.Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min =temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min =curTemp;
  }
  return max - min;
}

console.log(calcTempAmplitude(temperatures));

// Function should now receive 2 arrays of temps
const calcTempAmplitude2 = function (t1, t2) {
  const temp = t1.concat(t2);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  return max - min;
}

console.log(calcTempAmplitude2([1,2,3], [4,5,6]))

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 1, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

let result = "...";
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    result += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  return result;
}

console.log(printForecast(arr1));
