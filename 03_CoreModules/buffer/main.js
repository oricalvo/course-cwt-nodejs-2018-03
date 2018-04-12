const buf1 = Buffer.from("abcdef");
const buf2 = Buffer.from(buf1.buffer, 0, 1000);
console.log(buf2.toString());

