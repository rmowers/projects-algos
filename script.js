// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
function removeBlanks(str) {
    newStr = ""
    for (char in str){
        if (str[char] != " ") {
            newStr += str[char]
        }
    }
    return newStr
}

console.log(removeBlanks("P lay Tha tFunk yMusi c"))


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680 
function getDigits(str) {
    newNumStr = ""
    for(char in str) {
        if (!isNaN(str[char])){
            newNumStr += str[char]
        }
    }
    return Number(newNumStr)
}
console.log(getDigits("abc8c0d1ngd0j0!8"))


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronym(str) {
    wordArray = str.split(" ")
    acronymStr = ""
    for (word in wordArray) {
        if(wordArray[word].length > 0){
            acronymStr += wordArray[word][0].toUpperCase()
        }
    }
    return acronymStr
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "))


// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11
function countNonSpaces(str) {
    count = 0
    for(char in str) {
        if (str[char] != " ") {
            count ++
        }
    }
    return count
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))


// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
function removeShorterStrings(arr, len){
    shorterArr = []
    nextIndex = 0
    for (str in arr) {
        if (arr[str].length >= len){
            shorterArr[nextIndex++] = arr[str]
        }
    }
    return shorterArr
}

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))