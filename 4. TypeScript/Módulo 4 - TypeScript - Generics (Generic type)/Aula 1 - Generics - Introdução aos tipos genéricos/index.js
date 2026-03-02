function meuFilter(array, callbackfn) {
    var novoArray = [];
    for (var i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}
;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayFiltradoOriginal = array.filter(function (value) { return value < 5; });
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var meuArrayFiltradoOrigina2 = meuFilter(array2, function (value) { return value < 5; });
console.log(meuArrayFiltradoOrigina2);
