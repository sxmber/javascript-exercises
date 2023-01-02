const sumAll = function (first, last) {
    let finalSum = 0;
    for (i = first; i <= last; i++) {
        finalSum += i;
    }
    console.log(finalSum);
    return finalSum;
};
sumAll(1, 5);
// Do not edit below this line
module.exports = sumAll;
