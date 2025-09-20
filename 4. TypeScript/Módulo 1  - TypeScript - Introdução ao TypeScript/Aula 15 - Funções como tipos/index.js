function mapStrings(array, callbackFunc) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callbackFunc(array[i]));
    }
    return newArray;
}
var letters = ['a', 'b', 'c'];
var capitalLetters = mapStrings(letters, function (item) {
    return item.toUpperCase();
});
console.log(capitalLetters);
