const reverseString = function(str) {
    return str.split(" ").reverse().map((word) => word.split("").reverse().join("")).join(" ");
};

// Do not edit below this line
module.exports = reverseString;
