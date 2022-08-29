/**
 * Moving average
 * ```js
 * const movingAverage = require("https://github.com/ClintH/ixfx-espruino/blob/main/movingAverage.js");
 * let ma = movingAverage(3);
 * 
 * // Each call to ma() adds a number and returns
 * // current average
 * ma(10);
 * ma(5); 
 * ```
 * @param {number} scaling (use 3 for default)
 * @returns 
 */
const movingAverage = (scaling) => {
  let average = 0;
  let count = 0;

  return (v) => {
    count++;
    average = average + (v - average) / Math.min(count, scaling);
  }
};

exports = movingAverage;