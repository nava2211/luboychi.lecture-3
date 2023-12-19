///////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////// RECURCIA //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// function get(n) {
//     if (n == 5) {
//         return 5
//     }
//     return n + get (n + 1)
// }
// console.log(get(1))
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// CLOUSER ////////////////////////////////////////////
// function get() {
//     let cnt = 0
//     return () => {
//         return ++cnt;
//     }
// }
// console.log(get()());

// let first = get();
// console.log(first());
// console.log(first());
// console.log(first());

// Task 1.
// function get(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n * get (n - 1)
// }
// console.log(get(5))

// Task 2.
// function get(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n + get (n - 1)
// }
// console.log(get(10));

// Task 3.
// var nava = function (n1, n2) {
//     if (n2 === 0) {
//         return 1
//     } else {
//         return n1 * nava (n1,n2 - 1)
//     }
// }
// console.log(nava(2,3));

// Task 4.
// function get() {
//     let cnt = 0
//     return () => {
//         return ++cnt
//     }
// }
// let first = get ()
// console.log(first())
// console.log(first())
// console.log(first())