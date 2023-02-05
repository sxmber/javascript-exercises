const leapYears = function (year) {
    if (year % 4 == 0 && year % 100 == 0) {
        temp = year / 4;
        if (temp % 4 == 0) {
            console.log("leap year");
            return true;
        }
        // if (year % 4 == 0) {
        //     console.log(year);
        //     console.log("leap year");
        //     return true;
        // }

    } else if (year % 4 == 0 && year % 100 > 0) {
        console.log("leap year");
        return true;
    }

    return false;

};
leapYears(1900);
// Do not edit below this line
module.exports = leapYears;