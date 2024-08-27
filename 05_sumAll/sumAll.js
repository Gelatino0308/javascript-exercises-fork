const sumAll = function(firstNum, lastNum) {

    if (firstNum < 0 || lastNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return 'ERROR';
    }
    else {
        let sum = 0;
        if (firstNum > lastNum) {
            let temp = firstNum;
            firstNum = lastNum;
            lastNum = temp;
        }
        while (firstNum <= lastNum) {
            sum += firstNum;
            firstNum++;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
