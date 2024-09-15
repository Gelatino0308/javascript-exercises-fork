const findTheOldest = function(peopleArr) {

    return peopleArr.reduce((currOldest, currPerson) => {

        let currPersonDeath = currPerson.yearOfDeath;
        let currOldestDeath = currOldest.yearOfDeath;

        const currYear = new Date().getFullYear();

        if (!currPersonDeath) {
            currPersonDeath = currYear;
        }

        if (!currOldestDeath) {
            currOldestDeath = currYear;
        }

        const currPersonAge = currPersonDeath - currPerson.yearOfBirth;
        const currOldestAge = currOldestDeath - currOldest.yearOfBirth;

        return currPersonAge < currOldestAge ? currOldest : currPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
