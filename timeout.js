/**
 * Resettable timeout
 * ```js
 * const flow = require("https://github.com/ClintH/ixfx-espruino/blob/main/flow.js");
 * let t = flow.timeout(() => console.log('hi'), 1000);
 * t.start();
 * t.cancel();
 * t.isDone();
 * ```
 */
function timeout(callback, timeoutMs) {
 let timer = 0;
 let startedAt = 0;

 const start = (altTimeoutMs, args) => {
  if (altTimeoutMs === undefined) altTimeoutMs = timeoutMs;
  if (timer !== 0) cancel();
  startedAt = Date.now();
  timer = setTimeout(function() {
    callback(Date.now() - startedAt, args);
    timer = 0;
  }, timeoutMs);
 }
 
 const cancel = () => {
  if (timer === 0) return;
  startedAt = 0;
  clearTimeout(timer);
 }

 const isDone = () => {
  return timer !== 0;
 }

 return { start: start, cancel: cancel, isDone: isDone };
}
module = timeout;