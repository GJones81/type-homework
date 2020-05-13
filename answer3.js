var test1 = 'level';
var test2 = 'civic';
var test3 = 'kayak';
var test4 = 'noon';
var test5 = 'racecar';
var falseTest = 'a santa dog ived as a devl god at nasa';
var palindromeTest = function (test) {
    var splitString = test.split('');
    var stringLength = splitString.length;
    var middle = Math.floor(stringLength / 2);
    console.log(stringLength);
    console.log(middle);
    for (var i = 0; i < middle; i++) {
        if (splitString[i] !== splitString[((stringLength - 1) - i)]) {
            return false;
        }
    }
    return true;
};
console.log(palindromeTest(falseTest));
