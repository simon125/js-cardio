// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    return str.split('').reverse().join('')
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const reg = new RegExp(`${str}`)
    return reg.test(str.split('').reverse().join(''))
}
//console.log(isPalindrome('raceca'))


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    return int.toString().split('').reverse().join('')
}
//console.log(reverseInt('123'))



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    const arr = str
        .split(' ')
        .filter(el => {

            if (el) return true
            else return false
        })
        .map(el => {
            return el[0].toUpperCase() + el.substring(1)
        })

    return arr.join(' ')
}

//console.log(capitalizeLetters('i love      123qwe 123@# #%$#     javascript            asdsad        asdasd'))


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

    const charMap = {}
    let maxNum = 0
    let maxChar = ''

    str.split('').forEach((char) => {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    })

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxCharacter('javaascaripazzzzzzzzzzt'))


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() { 
    const arr = []
    for(let i = 1 ; i <= 100 ; i++ ){
        if(i % 15 == 0) arr[i] = 'FizzBuzz'
        else if(i % 3 == 0) arr[i] = 'Fizz'
        else if(i % 5 == 0) arr[i] = 'Buzz'
        else arr[i] = i

    }
    console.log(arr)
}
fizzBuzz()



// Call Function
const output = reverseString('hello');

console.log(output);