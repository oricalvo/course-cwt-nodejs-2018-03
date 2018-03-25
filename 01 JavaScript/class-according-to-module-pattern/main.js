function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    return {
        dump,
    };
}

const pt1 = Point(5, 10);
pt1.dump();

const pt2 = Point(10, 20);
pt2.dump();

console.log(pt1.dump == pt2.dump);

