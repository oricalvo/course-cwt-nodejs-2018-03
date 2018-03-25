function sum(num1, num2) {
    return this + num1 + num2;
}

var sum8 = sum.bind(1, 8);

console.log(sum8(10));
console.log(sum8(20));


