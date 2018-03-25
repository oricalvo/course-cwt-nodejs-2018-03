var timers = 0;

var originalSetTimeout = setTimeout;
global.setTimeout = function(){
    ++timers;

    var func = arguments[0];
    arguments[0] = function(){
        func.apply(this, arguments);

        --timers;
    }

    var retVal = originalSetTimeout.apply(this, arguments);

    return retVal;
}

setTimeout(function() {
    console.log("Done");
}, 1000);

setTimeout(function(){
    console.log("timers", timers);
}, 2000);

console.log("timers", timers);
















    function f() {
        console.log(this);
    }

var obj = {};
    obj[f] = f;

    obj.f();