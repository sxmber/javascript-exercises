const fibonacci = function (index) {
    if (index < 0) {
        return "OOPS";
    }
    let fib1 = 1;
    let fib2 = 1;
    for (i = 2; i <= index; i++) {
        result = fib1 + fib2;//2, 3, 5, 8, 13
        fib1 = fib2;//1, 2, 3, 5, 8
        fib2 = result;//2, 3, 5, 8, 13
    }
    return fib1;

};

// Do not edit below this line
module.exports = fibonacci;
