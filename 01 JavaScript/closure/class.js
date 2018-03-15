// var Counter = (function () {
//     var val = 0;
//
//     return function Counter () {
//         return {
//             inc: function() {
//                 ++val;
//             },
//             dec: function() {
//                 --val;
//             },
//             get: function() {
//                 return val;
//             }
//         }
//     }
// })();

function Counter (val) {
    return {
        inc: function() {
            ++val;
        },
        dec: function() {
            --val;
        },
        get: function() {
            return val;
        }
    }
}


var c1 = Counter(0);
c1.inc();
console.log(c1.get());

var c2 = Counter(10);
c2.dec();
c2.val = "XXX";
console.log(c2.get());
