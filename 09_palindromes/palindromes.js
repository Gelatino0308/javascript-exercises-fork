const palindromes = function (string) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    const str = string.toLowerCase();
    const charArr = str.split("");
    const checkedArr = charArr.filter((char) => alphanumeric.includes(char));
    const checkedStr = checkedArr.join("");
    const reversedArr = checkedArr.reverse();
    const reversedStr = reversedArr.join("");
    

    if (reversedStr === checkedStr) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
