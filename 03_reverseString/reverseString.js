const reverseString = function (string) {
    let myArray = string.split("");
    let result = "";

    for (i = myArray.length - 1; i >= 0; i--) {
        result += myArray[i];
        console.log(result);
        // resultArray.push(myArray[i]);
    }
    return result;

};
reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
