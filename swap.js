let first = 6;
let second = 4;
console.log(first, second);
// this is wrong approach
// first = second;
// second = first;

// this is 1st approach
const tempo = first;
first = second;
second = tempo;
console.log(first, second);

//this is second approch using distrunturing.

[first, second] = [second, first];
console.log(first, second);