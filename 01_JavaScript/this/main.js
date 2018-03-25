"use strict";

function g() {
    console.log(this);
}

// g();
//
// var obj = {
//     g: g,
// };
//
// obj.g();

// g.call(1234, 1, 2);

// g.apply(1243, []);

var f = g.bind({id: 123});

g();

f();
