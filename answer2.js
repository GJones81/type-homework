var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var findOdds = function (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 3 == 0) {
            newArray.push(array.shift());
            console.log(newArray);
        }
    }
    return newArray;
};
console.log(findOdds(array));
