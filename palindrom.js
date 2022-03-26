// check string is palindrom using loop
const checkPalindromeLoop = (str) => {

    // find the length of a string
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const findPalindromeSimple = (string) => {
    let cleanChar = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let reversedChar = cleanChar.split('').reverse().join('');
    return cleanChar === reversedChar ? 'It is a palindrome' : 'It is not a palindrome'
}

const findPalindromSingleIntegerLoop = (int) => {

    const str = int.toString().split('');
    const len = str.length;

    for (let i = 0; i < len; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const findPalindromSingleInteger = (int) => {
    return int === parseInt(int.toString().split('').reverse().join('')) ? 'It is a palindrome' : 'It is not a palindrome'
}

const findPalindromSingleIntegerRange = (from, to) => {
    let total = 0;

    for (let i = from; i <= to; i++) {
        i === parseInt(i.toString().split('').reverse().join('')) ? total += 1 : total += 0
    }

    return total;
}

const findPalindromSingleIntegerRangeWithSpace = (str) => {
    let from = parseInt(str.split(' ')[0])
    let to =  parseInt(str.split(' ')[1])

    let total = 0;

    for (let i = from; i <= to; i++) {
        i === parseInt(i.toString().split('').reverse().join('')) ? total += 1 : total += 0
    }

    return total;
}

// console.log(checkPalindromeLoop('ada'))
// console.log(findPalindromeSimple('ada'))
// console.log(findPalindromSingleIntegerLoop(99))
// console.log(findPalindromSingleInteger(55))
// console.log(findPalindromSingleIntegerRange(1,10))
// console.log(findPalindromSingleIntegerRangeWithSpace('1 10'))
let a = 23000 % 2
console.log(a)