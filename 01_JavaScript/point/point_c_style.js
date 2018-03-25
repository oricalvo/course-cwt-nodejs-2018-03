function Point(x, y) {
    return {
        x,
        y
    };
}

function dump(pt) {
    console.log(pt.x + ", " + pt.y);
}

function move(dx, dy) {
    pt.x+=dx;
    pt.y+=dy;
}


var pt1 = Point(5, 10);
dump(pt1);
