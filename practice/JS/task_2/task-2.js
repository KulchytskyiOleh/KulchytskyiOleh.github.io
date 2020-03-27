// Написати функцію на мові JavaScript для випадкового перемішування даних в масиві
// на зразок функціоналу такого популярного ресурсу, як Random.org
var arr = ["Андрій", "Марія", "Василь",
    "Петро", "Tom", "Jack",
    "Rick", "Andy", "Bob",
    "Will", "James", "Ostin", "Aj"];
var newArray = [];

function shuffleArray(names) {
    var randomName = 0;
    var lengOfArray = arr.length;
    for (var i = 0; i < lengOfArray; i++) {
        while (true) {
            randomName = Math.round(Math.random() * arr.length);
            if (randomName < arr.length) {
                break
            }
        }
        newArray[i] = arr[randomName];
        remove = arr.splice(randomName, 1);
    }
    return (newArray);
}
console.log("Old array = ", (arr));
console.log("New array = ", shuffleArray(newArray));
// можна використати "map" щоб згенерувати новий масив
