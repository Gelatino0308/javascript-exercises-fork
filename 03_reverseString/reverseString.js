const reverseString = function(str) {
    let charArr = str.split("");
    let strReverse = '';

    for (let i = charArr.length - 1; i >= 0; i--) { 
        strReverse += charArr[i];
    }

    return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
