function getUpperCase(str) {
    return str.toUpperCase();
}

function getLowerCase(str) {
    return str.toLowerCase();
}

function getSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getProperCase(str) {
    const words = str.split(" ");

    return words.map((word) => getSentenceCase(word)).join(" ");
}

module.exports = {
    getUpperCase,
    getLowerCase,
    getSentenceCase,
    getProperCase
}