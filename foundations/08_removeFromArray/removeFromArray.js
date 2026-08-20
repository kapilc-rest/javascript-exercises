const removeFromArray = function(arr, num, ...nums) {
    return arr.filter((number) => (number !== num && !nums.includes(number)));
};

// Do not edit below this line
module.exports = removeFromArray;
