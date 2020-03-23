console.log("Hello JavaScript");
/* -------------------------------- */

var a = 20, b = 15, x1, x2, x3, x4;
x1 = a + b;
x2 = a - b;
x3 = a * b;
x4 = a / b;
console.log("a =",a, "b = ",b);
console.log("a + b = ", x1);
console.log("a - b = ", x2);
console.log("a * b = ", x3);
console.log("a / b = ", x4);
/* -------------------------------- */

var r = prompt("Введіть радіус кола", r)
var p, s;
var p = 2 * Math.PI * r;
var s = Math.PI * r * r;
console.log("Радіус кола = ", r);
console.log("Периметр кола = ", p);
console.log("Площа кола =", s);
/* -------------------------------- */

var m, n;
var m = prompt("Введіть значення m", m)
if (m > 0) {
    console.log("n = 1");
} else if (m < 0) {
    console.log("n = -1");
} else {
    console.log("n = 0");
}