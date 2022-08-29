/**
 * 
 * Interpolates from `a`->`b` by `amt`
 * ```js
 * const interpolate = require("https://github.com/ClintH/ixfx-espruino/blob/main/interpolate.js");
 * interpolate(0.5, 100, 200);
 * ```
 */
const interpolate = (amount, a, b) => {
  return (1-amount) * a + amount * b;
};
exports.interpolate = interpolate;