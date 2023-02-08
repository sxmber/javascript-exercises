const findTheOldest = function (people) {
    const oldest = people.sort(function (a, b) {
        if (!a.hasOwnProperty('yearOfDeath')) {
            let person1 = (new Date().getFullYear() - a.yearOfBirth);
            let person2 = (b.yearOfDeath - b.yearOfBirth);
            return person2 - person1;
        }
        if (!b.hasOwnProperty('yearOfDeath')) {
            let person1 = (a.yearOfDeath - a.yearOfBirth);
            let person2 = (new Date().getFullYear() - b.yearOfBirth);
            return person2 - person1;
        }

        else {
            let person1 = (a.yearOfDeath - a.yearOfBirth);
            let person2 = (b.yearOfDeath - b.yearOfBirth);
            return person2 - person1;
        }

    });
    console.log("oldest", oldest);
    return oldest[0];

};
const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
