const getTheTitles = function(bookArr) {
    const titles = [];
    for (book of bookArr) {
        titles.push(book.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
