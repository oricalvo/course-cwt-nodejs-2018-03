class Timer {
    constructor(name, ms) {
        this.name = name;
        this.ms = ms;
    }

    start() {
        setInterval(()=> {
            this.onTick();
        }, this.ms);
    }

    onTick() {
        console.log(this.name, "tick");
    }
}

// console.log(Timer.prototype.start);

var t1 = new Timer("t1", 1000);
t1.start();

var t2 = new Timer("t2", 2000);
t2.start();

console.log(t1.start == t2.start);
