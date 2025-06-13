/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    // Iterate through the string up to the second-to-last character
    for (let i = 0; i < s.length - 1; i++) {
        // If current value is less than next value, subtract current value
        if (romanValues[s[i]] < romanValues[s[i + 1]]) {
            result -= romanValues[s[i]];
        } else {
            // Otherwise, add current value
            result += romanValues[s[i]];
        }
    }

    result += romanValues[s[s.length - 1]];
    return result;
};