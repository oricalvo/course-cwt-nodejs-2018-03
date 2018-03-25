var Timer = (function() {
    var nextId = 0;

    function Timer(ms) {
        this.id = ++nextId;

        setInterval(()=> {
            this.tick();
        }, ms);
    }

    Timer.prototype.tick = function () {
        console.log("tick: " + this.id);
    }

    return Timer;
})();

var t1 = new Timer(1000);
var t2 = new Timer(2000);

