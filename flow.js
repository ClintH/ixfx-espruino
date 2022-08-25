/**
 * ixfx flow
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

/** 
 * ```js
 * const flow = require(`flow.js`)
 * const d = flow.debounce(() => console.log('click'), 1000);
 * d();
 * ```
 */
debounce = function (callback, timeoutMs) {
  const t = timeout(callback, timeoutMs);
  const fn = (args) => t.start(args);
  return fn;
};

exports.debounce = debounce;
exports.timeout = timeout;