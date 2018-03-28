function Point(x, y) {
    this.x = x;
    this.y = y;
}

// for(var key in Point.prototype) {
//     console.log(key);
// }

Point.prototype.dump = function() {
    console.log("dump");
}

const pt1 = new Point(5, 10);
const pt2 = new Point(10, 20);
console.log(pt1.__proto__ == Point.prototype);
console.log(pt1.__proto__ == pt2.__proto__);

pt1.__proto__.dump();
pt1.__proto__.__proto__.toString();

pt1.toString();
