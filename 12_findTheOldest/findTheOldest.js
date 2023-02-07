const findTheOldest = function (people) {
    const oldest = people.sort(function (a, b) {
        const lastInventor = a.yearOfDeath - a.yearOfBirth;
        const nextInventor = b.yearOfDeath - b.yearofBirth;
        return lastInventor > nextInventor ? -1 : 1;
    });
    console.log(oldest);

};
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
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
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
