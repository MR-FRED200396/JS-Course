
function t1() {
    let a = 0;
    return function () {
        a = a + 1;
        return a;
    }
}

let b = t1();
let c = t1();
console.log(b);
console.log(b()); //1
a = 77;
console.log(b()); //2
console.log(c()); //1
console.log(c()); //2
console.log(b()); //3




console.log(c()); //3

// console.log(one());
// console.log(one());
// a = 6;
// console.log(one());