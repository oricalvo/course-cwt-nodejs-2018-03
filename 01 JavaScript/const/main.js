function g() {
    for(var i=0; i<10; i++) {
        (function(i) {
            task(function() {
                console.log(i);
            });
        })(i);

    }
}

function task(callback) {
    setTimeout(callback, 2500);
}

g();



