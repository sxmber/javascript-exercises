const sumAll = function (first, last) {
    let finalSum = 0;
    if (first >= 0 && last >= 0 && Number.isInteger(first) == true && Number.isInteger(last) == true) {
        if (first < last) {
            for (i = first; i <= last; i++) {
                finalSum += i;
            }
            console.log(finalSum);
            return finalSum;
        } else {
            for (i = last; i <= first; i++) {
                finalSum += i;

            }
            console.log(finalSum);
            return (finalSum);
        }

    } return "ERROR";


};
sumAll(5, 1);
// Do not edit below this line
module.exports = sumAll;
