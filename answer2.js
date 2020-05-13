var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var findOdds = function (array) {
    var oddArray = [];
    var evenArray = [];
    for (var i = 0; i < array.length; i++) {
        console.log(array.length);
        console.log(i);
        if (i % 2 === 0) {
            evenArray.push(array.shift());
            console.log('evenArray', evenArray);
        }
        else {
            oddArray.push(array.shift());
            console.log('oddArray', oddArray);
        }
    }
    return oddArray;
};
console.log(findOdds(array2));
