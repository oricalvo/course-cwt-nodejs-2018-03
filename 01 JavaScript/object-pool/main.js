var hashCode = (function() {
    var MAGIC_FIELD = "####hashCodeblabla888";
    var nextHash = 0;

    return function hashCode(obj) {
        var hash = obj[MAGIC_FIELD];
        if (!hash) {
            hash = obj[MAGIC_FIELD] = ++nextHash;
        }

        return hash;
    }
})();

function getRandomKey(obj) {
    for(var key in obj) {
        return key;
    }

    return null;
}


function ObjectPool() {
    var map = {};

    function add(obj) {
        var hash = hashCode(obj);

        if(map[hash]) {
            return;
        }

        map[hash] = obj;
    }

    function pull() {
        var hash = getRandomKey(map);
        if(!hash) {
            return null;
        }

        var obj = map[hash];
        delete map[hash];
        return obj;
    }

    return {
        add,
        pull,
    }
}

function assert(val) {
    if(!val) {
        throw new Error("Assertion failure")
    }
}

function test() {
    try {
        var obj1 = {
            id: 1,
        };

        var obj2 = {
            id: 1,
        };

        var pool1 = ObjectPool();

        pool1.add(obj1);
        var ret = pool1.pull();
        assert(ret == obj1); // true

        pool1.add(obj1);
        pool1.add(obj1);
        ret = pool1.pull();
        ret = pool1.pull();
        assert(ret == null); // false

        pool1.add(obj1);
        pool1.add(obj2);
        ret = pool1.pull();
        assert(ret != null); // true
        ret = pool1.pull();
        assert(ret != null); // true

        console.log("PASS");
    }
    catch (err) {
        console.log("FAIL: " + err.message);
    }
}

test();

var obj = {};

obj[obj] = true;