const getTheTitles = function (array) {
    let newArray = array.map((title) => {
        return title.title;
    })
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
