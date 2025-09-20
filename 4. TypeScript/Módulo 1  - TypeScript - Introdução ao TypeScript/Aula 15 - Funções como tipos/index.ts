// function mapStrings(array: string[], callbackFunc: CallableFunction): string[] {
    // const newArray: string[] = [];

    // for(let i = 0; i < array.length; i++) {
        // newArray.push(callbackFunc(array[i]));
    // }
    
    // return newArray;
// }

// const letters = ['a', 'b', 'c'];

// const capitalLetters = mapStrings(letters, function(item: any) {
    // return item.toUpperCase();
// });

// console.log(capitalLetters);

// correção

type MapStringCallback = (item: string) => string;

function mapStrings(array: string[], callbackFunc: MapStringCallback): string[] {
    const newArray: string[] = [];

    array.forEach(item => {
        newArray.push(callbackFunc(item));
    });
    
    return newArray;
}

const letters = ['a', 'b', 'c'];

const capitalLetters = mapStrings(letters, function(item: string) {
    return item.toUpperCase();
});

console.log(capitalLetters);
