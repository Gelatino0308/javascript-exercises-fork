const removeFromArray = function(arr, ...theArgs) {

    const newArr = arr.filter(item => {
        let notTarget = true;
        for (const target of theArgs) {
            if (item === target) {
                notTarget = false;
            }
        }
        if (notTarget === true) return item;
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
