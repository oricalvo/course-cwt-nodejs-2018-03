const {Readable} = require("stream");

class MyStream extends Readable {
    constructor() {
        super({
            objectMode: true,
        });

        this.id = 1;
    }

    _read(size) {
        console.log("_read");

        while(true) {
            const id = this.id++;
            console.log("push", id);
            if(!this.push({id})) {
                console.log("break");
                break;
            }
        }

    }
}

const stream = new MyStream();

let item;
while(item = stream.read()) {
    console.log(item);
}

stream.on("end", function() {
    console.log("end");
});

