const reverseString = function(str) {
    let arr = str.split(" ").reverse();
    return arr.map((word) => word.split("").reverse().join("")).join(" ");
};

// Do not edit below this line
module.exports = reverseString;
