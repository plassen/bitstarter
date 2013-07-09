#!/usr/bin/env node

var prime = function(n) {
  if(n < 2) { return 0; }
  else if(n == 2 || n == 3) { return 1; }
  else {
   for (j = 2; j < (n/2) + 1 ; j++ )
     if( n%j == 0 ) { return 0; }
   return 1;
  };
};

var firstXprime = function(n) {
  var arr = [];
  var i = 2;
  while(arr.length < 100) {
    if (prime(i)) { arr.push(i) };
    i++;
  };
  return arr;
};

var fmt = function(arr) {
  return arr.join(",");
};

var fs = require('fs');
var outfile = "hw1pt2.text";
var out = fmt(firstXprime(100));
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

