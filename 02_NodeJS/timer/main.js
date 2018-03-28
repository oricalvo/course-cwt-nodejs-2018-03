function Timer(name, ms) {
    var self = this;

    this.name = name;

    setInterval(function() {
        self.onTick();
    }, ms);
}

Timer.prototype.onTick = function() {
    console.log(this.name + ": tick");
}

new Timer("t1", 1000);
new Timer("t5", 5000);

