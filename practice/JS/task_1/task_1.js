/* task_1 */
/* var i = 1;
while (i <= 50) {
    document.write(i + '<br>');
    i++;
} */
/* for (var i = 1; i <= 50; i++) {
    console.log(i);
} */
/* task_2 */
/* var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
} */

/* task_3*/
/* var arr = [2, 3, 4, 5];
var count = 1;
for (var i = 0; i < arr.length; i++) {
    count *= arr[i]
}
document.write(count + '<br>'); */

/* task_4
 *//* var i = 1;
while (i <= 100) {
console.log(i);
i++;
} */
/* task_4
for (var i = 100; i > 90; i--) {
    console.log(i);
}*/

/*
// task_5 using cycle "for"//
 for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
       console.log("парне число =", i);
    }
    else {
        console.log("Непарне число");

    }
}
// same task using cycle "while" //
var i = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log("Парне число =", i);
    }
    else {
        console.log("Непарне число =", i);
    }
    i++;
}
*/
//task_6
/* var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = 'x';
}
console.log(arr); */
//task_7

/* var arr = [];
for (var i = 1; i < 10; i++) {
    arr.push(i);
}
console.log(arr);
 */

/* var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(Math.random().toFixed(1));
}
console.log(arr);
 */

/*   var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 10) + 1);
}
console.log(arr);

 */

/* var i = 0;
for (var i = 1; i < 10; i++) {
console.log();

} */
/* for (var i = 1; i <= 10; i++) {
    console.log(i);
}
 */
/* var sumOfElem = 1;
var prductOfElem = 1;
var arr = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i<=arr.length; i++) {

    sumOfElem += arr[i];
}
console.log(arr);
console.log(sumOfElem);
 */
//Write the code to find the sum and product of first 10 natural numbers.
/* 
var sum = 0;
var prod = 1;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    prod *= arr[i];
    ;
}
console.log("Сума чисел від 1 до 10 =", sum);
console.log("Добуток чисел від 1 до 10 =", prod);
*/
/* var sum = 0;
var prod = 1;
for (var i = 1; i <= 10; i++) {
    sum += i;
    prod *= i;
}
console.log("Сума чисел від 1 до 10 =", sum);
console.log("Добуток чисел від 1 до 10 =", prod);
 */
// ------------------------------ //
/* var i = 0;
for ( var i = 11; i <= 33; i++) {
    console.log(i);
}
 */
/* for (var i = -10; i < 10; i++) {
    if (i > 0) {
        console.log('додатнє число =', i);
    }
    else if (i < 0){
        console.log("від'ємне число =", i);
    }
    else {
        console.log("ваше число =", i)
    }
} */
// ------------------------------------------------------------ //

var arr1 = [-6, 10, 20, 30, -1, 22, -0.2, -8, - 2, 10, 20, 44, 1, -4, 2, 5, 6, 9, 10, 12];
//мінамальний елемент має бути рівний -6
function min(arr) {
    var m = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < m) {
            m = arr[i];
        }
    }
    return (m);
}
console.log("Мінімальний елемент масиву =", min(arr1));
// ------------------------------ //

//масимальний елемент має бути рівний 44
/* function max(arr) {
    var m = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > m) {
            m = arr[i];
        }
    }
    return (m);
}
console.log("Максимальний елемент масиву =", max(arr1)); */
// ------------------------------ //

// Сума додатніх елементів масиву має бути рівний 201

/* function sumOfPos(arr) {
    var m = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr1[i] > 0) {
            m += arr1[i];
        }
    }
    return (m);
}
console.log("Сума додатніх елемент масиву =", sumOfPos(arr1)); */
// ------------------------------------------------------------ //
//Добуток від'ємних елементів має бути рівний 48 
/* function prodOfNeg(arr) {
    var m = 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr1[i] < 0) {
            m *= arr1[i];
        }
    }
    return (m);
}
console.log("Добуток від'єсних елементів масиву =", prodOfNeg(arr1)); */

