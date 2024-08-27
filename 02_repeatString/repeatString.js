const repeatString = function(str, numTimes) {
    if (numTimes >= 0) {
        let repeated = '';
        for (let i = 0; i < numTimes; i++) {
            repeated += str;
        }
        return repeated;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
