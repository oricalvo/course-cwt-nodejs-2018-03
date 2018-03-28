var log = console.log.bind(console, "lib>");

function run() {
    log("loaded");
}

function calc() {
}

exports.run = run;
exports.calc = calc;

Object.assign(module.exports, {
    run,
    calc,
});

exports = module.exports = {
    run,
    calc,
};
