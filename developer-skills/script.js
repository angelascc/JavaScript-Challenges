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
