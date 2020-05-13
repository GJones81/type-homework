var array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
var array2 = [1, 2, 3, 4, 5, 6];
var zipper = function (item1, item2) {
    var newArray = [];
    while (item1.length || item2.length > 0) {
        if (item1.length > 0) {
            newArray.push(item1.shift());
        }
        if (item2.length > 0) {
            newArray.push(item2.shift());
        }
    }
    return newArray;
};
console.log(zipper(array1, array2));
