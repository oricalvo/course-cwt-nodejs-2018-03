"use strict";

function g(num) {
    console.log(this, num);
}

// g();

// var obj = {
//     g: g,
// };
//
// obj.g();
// g.call(123, 4);
// g.apply(123, [4]);

var f = g.bind(555, 666);
f();

//f.call(666);

console.log(f.prototype == g.prototype);
