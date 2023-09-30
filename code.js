// 1 ---- Write a function that returns reverse of a string?

function reverseStr(str) {
  if (str) return str.split("").reverse().join("");
}

// console.log(reverseStr("Prabhat Ranjan"));

// 2 ---- Above problem should return first letter caps if reversed

function reverseStr(str) {
  let s = "";
  if (str) {
    s = str.split("").reverse().join("").toLowerCase();
  }

  return s.slice(0, 1).toUpperCase() + s.slice(1, s.length);
}

// console.log(reverseStr("Prabhat Ranjan"));

// 3 --- Write a function that returns longest word in a sentance

function longestWordInSen(str) {
  let long = -Infinity;
  const strObj = {};
  str.split(" ").forEach((element) => {
    const a = element.length;
    if (!strObj[element]) {
      strObj[a] = element;
    }
    if (a > long) {
      long = a;
    }
  });

  return strObj[long];
}

// console.log(longestWordInSen('My very educated mother just shows us nine planet'));

// 4 ---- Write a function that checks whether a given string is a palindrome or not

function palindromeCheck(str) {
  const rev = str?.split("").reverse().join("");

  return str === rev ? "String is Palindrome!" : "String is not Palindrome!";
}

// console.log(palindromeCheck("abcbad"));

// 5 ---- Write a function to remove duplicate elements from an array also sort the array

function removeDuplicateFromArray(arr) {
  return arr
    .reduce((acc, curr) => {
      if (acc.indexOf(curr) === -1) {
        acc.push(curr);
      }

      return acc;
    }, [])
    .sort((a, b) => a - b);
}

// console.log(removeDuplicateFromArray(["one", "two", "one", "two", "three"]));

// 6 ---- Write a function that checks whether two string are anagrams or not

function checkAnagrams(strA, strB) {
  if (strA.length !== strB.length) return "Strings are not anagrams";

  for (let i = 0; i < strA.length; i += 1) {
    if (!strB.includes(strA[i])) {
      return "Strings are not anagrams";
    }

    if (!strA.includes(strB[i])) {
      return "Strings are not anagrams";
    }
  }

  return "Strings are anagrams";
}

// console.log(checkAnagrams('listen', 'silent'));

// 7 ---- Write a function that retunrs the number of vowels in a string

function noOfVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(str[i])) {
      count++;
    }
  }

  return count;
}

// console.log(noOfVowels("A quick brown fox jumps over a lazy dog"));

// 8 ---- Write a function to find the largest number in an array

function largestNoInArray(arr) {
  let largest = -Infinity;

  arr.forEach((ele) => {
    if (ele > largest) {
      largest = ele;
    }
  });

  return largest;
}

// console.log(largestNoInArray([90, 34, 45, 76, 98, 93, 12, 46, 130, 48, 87, 75, 83]));

// 9 ---- Write a program to find largest and second largest number in an array considering positive integers

function twoLargestInArr(arr) {
  let largest = -Infinity;
  let largestTwo = 0;

  arr.forEach((ele) => {
    if (ele > largest) {
      largestTwo = largest;
      largest = ele;
    }
  });

  return [largest, largestTwo];
}

// console.log(twoLargestInArr([90, 34, 45, 76, 98, 93, 12, 46, 130, 48, 87, 75, 83]));

// 10 ---- Write a function to check if a given number is prime or not?

function checkPrime(num) {
  let count = 0;

  if (num === 1) return "Number is not Prime";

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      count++;
    }

    if (count > 2) return "Number is not Prime";
  }

  return "Number is Prime";
}

// console.log(checkPrime(89));

// 11 ---- Return all prime number between a given range

function returnIfPrime(num) {
  let count = 0;

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      count++;
    }

    if (count > 2) return;
  }

  return num;
}

function primeList(num) {
  const list = [];
  for (let i = 2; i <= num; i += 1) {
    if (returnIfPrime(i)) {
      list.push(returnIfPrime(i));
    }
  }

  return list;
}

// console.log(primeList(100));

// 12 ---- Write a program to calculate factorial of a number

function factorialNum(num) {
  if (num === 0 || num === 1) return 1;

  return num * factorialNum(num - 1);
}

// console.log(factorialNum(3));

// 13 ---- Write a program to remove all whitespace characters from a string

function removeWhiteSpace(str) {
  console.log(str.split(" "));
  let s = "";
  str.split(" ").forEach((ele) => {
    if (ele) {
      s += `${ele} `;
    }
  });

  return s.trim();
}

// console.log(removeWhiteSpace('A quick   brown fox     jumps over     a lazy dog.'));

// 14 ---- Write a program to find all Anagrams of a given a string

function getAllAnagrams(input) {
    // Base case
    if (input.length === 1) {
        return [input];
    }

    let anagrams = [];

    // Get all anagrams of the string excluding the first character
    let smallerAnagrams = getAllAnagrams(input.slice(1));

    // Insert the first character into different positions of the smaller anagrams
    for (let i = 0; i < smallerAnagrams.length; i++) {
        for (let j = 0; j <= smallerAnagrams[i].length; j++) {
            let anagram = smallerAnagrams[i].slice(0, j) + input[0] + smallerAnagrams[i].slice(j);
            anagrams.push(anagram);
        }
    }

    return anagrams;
}


// console.log(new Set([...getAllAnagrams("aabb")])); // for removing duplicate
// console.log(getAllAnagrams("abcd"));

// 15 ---- Write a program to find all substring of a given string

function allSubstring(str) {
    const s = [];
    for(let i=0; i<str.length; i++) {

        // Using substring(start, end) and substr(start, length)
        // for(let j=i+1; j<=str.length; j++) {
        //     s.push(str.substring(i, j));
        // }

        for(let j=1; j<=str.length-i; j++) {
            s.push(str.substr(i, j));
        }
    }

    return s;
}

// console.log(allSubstring("abcd"));
// (n*(n+1))/2
// abcd
// a, ab, abc, abcd, b, bc, bcd, c, cd, d
