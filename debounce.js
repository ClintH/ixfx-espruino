/** 
 * ```js
 * const fldebounceow = require("https://github.com/ClintH/ixfx-espruino/blob/main/debounce.js");
 * const d = debounce(() => console.log('click'), 1000);
 * d();
 * ```
 */
debounce = function (callback, timeoutMs) {
  const t = timeout(callback, timeoutMs);
  const fn = (args) => t.start(args);
  return fn;
};
exports = debounce;