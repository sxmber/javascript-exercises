const findTheOldest = function (people) {
    const oldest = people.sort((a, b) => {
        const person1Age = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth;
        const person2Age = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth;

        return person2Age - person1Age;
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
// module.exports = findTheOldest;
