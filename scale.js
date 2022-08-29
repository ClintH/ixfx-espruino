/**
 * Scales `v`, with a given input range to a given output range. If unspecified, output range is 0..1
 * 
 * ```js
 * const scale = require("https://github.com/ClintH/ixfx-espruino/blob/main/scale.js");
 * scale(50, 0, 100); // 0.5s
 * ```
 * @param {*} v 
 * @param {*} inMin 
 * @param {*} inMax 
 * @param {*} outMin 
 * @param {*} outMax 
 * @returns 
 */
const scale = (v, inMin, inMax, outMin, outMax, easingFn) => {
  if (typeof outMin === `undefined`) outMin = 0;
  if (typeof outMax === `undefined`) outMax = 1;
  const a = (v - inMin) / (inMax - inMin);
  if (typeof easingFn !== undefined) a = easingFn(a);
  return a * (outMax - outMin) + outMin;
};
exports = scale;