class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    dump() {
        console.log(this.x, this.y);
    }
}

class PointEx extends Point {
    constructor(x,y,z) {
        super(x,y);

        this.z = z;
    }

    dump() {
        super.dump();

        console.log(this.z);
    }
}

var pt = new PointEx(1,2,3);
//pt.dump();

// Point.prototype.dump.call(pt);

pt.__proto__.__proto__.dump.call(pt);