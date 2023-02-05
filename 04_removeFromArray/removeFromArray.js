const removeFromArray = function (array, ...args) {
    console.log(array)
    console.log(args);
    for (let a of args) {
        for (let i of array) {
            if (a === i) {
                let test = array.indexOf(i);
                array.splice(test, 1);
            }
        }
    }
    console.log(array);
    return array;
};
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);

// Do not edit below this line
module.exports = removeFromArray;
