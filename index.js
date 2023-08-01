/*!
 * random-range <https://github.com/rahuljaim/random-alphanumeric>
 * Copyright (c) 2023 Rahul Jain, contributors.
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function randomrange(a, b, stringa, where) {
  const mx = Math.max(a, b);
  const mn = Math.min(a, b);
  const rnd = Math.floor(Math.random() * (mx - mn - 1)) + mn + 1;

  if (stringa === "ALPHA" && where === "start") {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    return randomLetter + rnd.toString();
  } else if (stringa === "ALPHA" && where === "end") {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    return rnd.toString() + randomLetter;
  } else if (where === "start") {
    return stringa + rnd.toString();
  } else if (where === "end") {
    return rnd.toString() + stringa;
  } else {
    return rnd;
  }
};
