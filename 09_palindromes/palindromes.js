const palindromes = function (a) {
    //create new array that makes all characters lowercase, splits each char into into own index and reverses their order
    let reversedArray = a.toLowerCase().split("").reverse();
    let originalArray = a.toLowerCase().split("");
    console.log(reversedArray);
    //filter function that removes spaces and puncutation
    //NOTE: IF REMOVING ITEMS FROM ARRAYS THROUGH LOOPS, ITERATE BACKWARDS TO AVOID SKIPPING INDEXES
    function clean(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === ' ' || array[i] === ',' || array[i] === "." || array[i] === "!") {
                array.splice(i, 1);
            }
        }

    }
    clean(reversedArray);
    clean(originalArray);
    //converts the arrays to strings
    reversedArray = reversedArray.join('')
    originalArray = originalArray.join('')
    return reversedArray === originalArray ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
