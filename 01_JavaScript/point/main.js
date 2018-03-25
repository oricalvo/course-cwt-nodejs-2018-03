function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    function move(dx, dy) {
        x+=dx;
        y+=dy;
    }

    return {
        dump,
        move,
    }
}

var pt1 = Point(5, 10);
var pt2 = Point(10, 20);

pt1.dump();
pt2.dump();

console.log(pt1.dump == pt2.dump);

function Tag() {
}

var t = new Tag();
t.pt1 = pt1;
t.pt2 = pt2;
