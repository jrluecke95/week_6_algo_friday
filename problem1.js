// const arrayChecker = (input) => {
//     console.log(Array.isArray(input));
// }
// arrayChecker(1);

// const elementGetter = (array, n) => {
//     const elements = array.slice(0, n);
//     return elements;
// }

// console.log(elementGetter([1, 2, 3], 2));

// const joiner = array => {
//     return array.join(" ");
// }

// console.log(joiner(['i', 'like', 'big', 'butts']));

// const inserter = num => {
//     let arr = num.toString().split('');
//     let finalArr = arr.join('-')
//     return finalArr;
// }

// console.log(inserter('123456'))

// const sorter = array => {
//     return array.sort();
// }

// console.log(sorter(['ad', 'ab', 'ac']))

const frequency = array => {
    let items = {};
    let maxItem;
    let maxCount = 1;
    for (let i = 0; i < array.length; i++) {
        if (items[array[i]] === undefined) {
            items[array[i]] = 1
        } else {
            items[array[i]]++
        }
        if (items[array[i]] > maxCount) {
            maxCount = items[array[i]]
            maxItem = array[i];
        }
    }
    return maxItem;
}

console.log(frequency([2, 3, 1, 1, 4, 4, 4]))