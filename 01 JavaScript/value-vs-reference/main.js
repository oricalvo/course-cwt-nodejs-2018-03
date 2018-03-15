function change(x){
    // x = {
    //     id: 345,
    // };

    x.id = 345;
}

var x = {
    id: 123,
};

change(x);

console.log(x.id);
