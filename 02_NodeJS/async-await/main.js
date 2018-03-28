async function longComputation() {
    await delay(1000);

    return 42;
}

async function main() {
    const res = await longComputation();
    console.log(res);
}

main();

function delay(ms) {
    return new Promise((resolve,reject)=> {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}

