
// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"


function removeBlanks(string){
    // To keep track of non-space
        // character count
        var count = 0;

        // Traverse the given string. If current
        // character is not space, then place
        // it at index 'count++'
        for (var i = 0; i < string.length; i++)
          if (string[i] !== " ") 
          string[count++] = string[i];
          return count
}
var string=" Pl ayTha tF u nkyM usi c ".split("");
var i=removeBlanks(string)
console.log("----REMOVE BLANKS----:")
console.log(string.join("").substring(0, i))

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str){
    //newString
    let newString=''
    for (let char in str){
        if(!isNaN(str[char])){
            newString += str[char]
        }
    }
    return Number(newString)

}
console.log("----GET DIGITS----:")
console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronymus(str) {
    // words is [ "central", "processing", "unit" ]
    let words = str.split(/\s+/);
    let acro = '';
    for (let i = 0; i < words.length; i++) {
      acro += words[i][0];
    }
    return acro.toUpperCase();
 }
 
 console.log("----GET ACRONYMUS----:")
 console.log(acronymus("there's no free lunch - gotta pay yer way"))

//  Count Non-Spaces
//  Create a function that, given a string, returns the number of non-space characters found in the string. 
//  Examples:
//  countNonSpaces("Honey pie, you are driving me crazy") => 29
//  countNonSpaces("Hello world !") => 11
function countNonSpaces(nonspaces){
    count = 0;
        for (var i = 0, len = nonspaces.length; i < len; i++) {
            if (nonspaces[i] !== ' ')
                count++;
        }
        return count;
}
console.log("----COUNT NON SPACES----:")
console.log(countNonSpaces("Hello world !"))

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr,leng){

    let newStr=[]
    let ind=0
for (let value in arr){
    if(arr[value].length>=leng){
        newStr[ind++]=arr[value]
    }
}
return newStr;
}
console.log("----REMOVE SHORTER STRINGS----")
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))