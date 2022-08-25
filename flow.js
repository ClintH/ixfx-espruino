/* Copyright (c) 2022 CH. See the file LICENSE for copying permission. */
/*
flow
*/

var C = {
  MY : 0x001,          // description
  PRIVATE : 0x001,     // description
  CONSTANTS : 0x00423  // description
};

function MOD123(pin1,pin2) {
  this.pin1 = pin1;
  this.pin2 = pin2;
}

/** 'public' constants here */
MOD123.prototype.C = {
  MY : 0x013,         // description
  PUBLIC : 0x0541,    // description
  CONSTANTS : 0x023   // description
};

/** Put most of my comments outside the functions... */
MOD123.prototype.foo = function() {
  // you can use C.PRIVATE
  // or this.C.PUBLIC
};

/** Put most of my comments outside the functions... */
MOD123.prototype.bar = function() {
};

function timeout(callback, timeoutMs) {
 let timer = 0;
 let startedAt = 0;

 const start = (altTimeoutMs) => {
  if (altTimeoutMs === undefined) altTimeoutMs = timeoutMs;
  if (timer !== 0) cancel();
  console.log('timeout start');
  timer = setTimeout(function() {
    console.log('timeout invoking callback');
    callback();
    timer = 0;
  }, timeoutMs);
 }
 
 const cancel = () => {
  if (timer === 0) return;
  console.log('timeout cancelling');
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
  const fn = () => t.start();
  return fn;
};

exports.debounce = debounce;
exports.timeout = timeout;