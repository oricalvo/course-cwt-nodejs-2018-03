try {
    var obj1 = {
        id: 1,
    };

    var obj2 = {
        id: 1,
    };

    var pool1 = ObjectPool();

    pool1.add(obj1);
    var ret = poo1.pull();
    assert(ret == obj1); // true

    pool1.add(obj1);
    pool1.add(obj1);
    ret = poo1.pull();
    ret = poo1.pull();
    assert(ret == null); // false

    pool1.add(obj1);
    pool1.add(obj2);
    ret = poo1.pull();
    assert(ret != null); // true
    ret = poo1.pull();
    assert(ret != null); // true

    console.log("PASS");
}
catch(err) {
    console.log("FAIL: " + err.message);
}

function assert(val) {
    if(!val) {
        throw new Error("Assertion failure")
    }
}