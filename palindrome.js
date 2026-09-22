function isPalindrome(str) {
  const revarseStr = str.split("").reverse().join("");
  return str === revarseStr;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("medem"));
console.log(isPalindrome("hello")); // false
