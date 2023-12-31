**Random Alphanumeric generator**

[![Coverage Status](https://coveralls.io/repos/github/rahuljaim/random_alphanumeric_range/badge.svg?branch=main)](https://coveralls.io/github/rahuljaim/random_alphanumeric_range?branch=main)
[![npm version](https://img.shields.io/npm/v/random_alphanumeric_range.svg)](https://www.npmjs.com/package/random_alphanumeric_range)
[![License](https://img.shields.io/npm/l/random_alphanumeric_range.svg)](https://github.com/rahuljaim/random_alphanumeric_range/blob/main/LICENSE)

The provided JavaScript method **randomrange(a, b, some_string, where)** generates a random number within the range **(a, b)** and combines it with a given string. The string can either be random alphabets **('ALPHA')** or any custom string. The where parameter determines whether the string should be appended at the 'start' or the 'end' of the generated random number.


# Explanation of the functionality provided by the package.

The function follows these rules:
- If `string_alpha` is set to 'ALPHA' and `string_append_where` is set to 'start', it generates a random alphabet character from 'abcdefghijklmnopqrstuvwxyz' and concatenates it at the start of the random number.
- If `string_alpha` is set to 'ALPHA' and `string_append_where` is set to 'end', it generates a random alphabet character from 'abcdefghijklmnopqrstuvwxyz' and concatenates it at the end of the random number.
- If `string_append_where` is set to 'start', it concatenates the provided `string_alpha` at the start of the random number.
- If `string_append_where` is set to 'end', it concatenates the provided `string_alpha` at the end of the random number.
- If none of the above conditions are met, it returns only the generated random number.

## Installation

Install ui-modal-and-timeout with npm

```bash
  npm i random_alphanumeric_range --save-dev
```

## How to use

```bash
const randomrange = require('random_alphanumeric_range');

// Assign values
const start_range = 455;
const end_range = 480;
const string_alpha = "String_goes_here";
const string_append_where = "start" or "end";

// Note: if string_alpha assigned to "ALPHA", it will generate random alphabet and append as per where condition.

// Use the function from the package
const result = randomrange(start_range, end_range, string_alpha, string_append_where);
console.log(result);
```


In the provided example, `randomrange(455, 480, "ALPHA", 'end')` will return a random number between 456 and 479 (both inclusive) and append a random alphabet character at the end of the number. The result will be similar to "459d", "466h", "480f", etc., where the last character is a random alphabet.



## Author
Rahul Jain
- GitHub: [github/rahuljaim](https://github.com/rahuljaim)
- Email: [rahuljait@gmail.com](mailto:rahuljait@gmail.com)
