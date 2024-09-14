const fibonacci = function(pos) {
    pos = parseInt(pos);

    if (pos < 0) {
        return "OOPS";
    }

    if (pos === 0) {
        return 0;
    }

    if (pos === 1) {
        return 1;
    }

    return fibonacci(pos - 1) + fibonacci(pos - 2);
};

// Do not edit below this line
module.exports = fibonacci;
