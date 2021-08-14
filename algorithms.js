'strict'
/////////////////////////////////////////////////////////////////////
//KATA1 checkstatus1
function spinWords(string){
  let str = ' ';
    let subString = string.split(' ');
  
   for(let i =0;i < subString.length; i++){
     if(subString[i].length >=5){
      str += ' ' +subString[i].split('').reverse().join('')

     }else{
       str += ' ' + subString[i]
     }
   }
     return str
  }
 console.log(spinWords('welcome'));
 /////////////////////////////////////////////////////////////////////
//  kata 2
//  In this kata you will create a function that takes
//  a list of non-negative integers and strings 
//  and returns a new list with the strings filtered out.
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
const intFilter = function(arr){
return arr.filter(el => typeof el === 'number' )


}
console.log(intFilter([1,2,'a','b']))
/////////////////////////////////////////////////////////////////////
//kata3 
// Implement a method that accepts 3 integer values a, b, c. 
//The method should return true if a triangle can be built with the sides of given length 
// and false in any other case.

function isTriangle(a,b,c)
{
  if(a<=0 || b<=0|| c<=0)
   return false;
  
 if(a+b>c && b+c >a && c+a >b)
return true;
  
else 
return false;
}
console.log(isTriangle(1,2,2))
/////////////////////////////////////////////////////////////////////
//kata4
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. 
// And it will be always exactly one letter be missing.
//  The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// const misCharacter = function(char){
// const misChar = char.reduce((acc,cur)=> {
//  acc.charCodeAt()

// })
// }



/////////////////////////////////////////////////////////////////////
//kata5
// Write a function that takes a string of braces, and determines if the order of the braces is valid.
//  It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters:
//  brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  Fals
// "[({})](]" =>  False



// const validBraces = function(braces){
//   const openBraces = ['(','{','['];
// const closeBraces = [')','}', ']'];
// let arr = [];
//   const improBraces = braces.split('');
//   for(let i =0; i< improBraces.length; i++){
//     if(openBraces.includes(improBraces[i])){
// arr.push(improBraces[i]);}
// //indexOf the last item pushed(arr[arr.length-1)]) in array in openBraces === indexOf the improBraces[i] in closeBraces
// else if(closeBraces.indexOf(improBraces[i])=== openBraces.indexOf(arr[arr.length-1])){
//   arr.pop();
// }else false;
//     }return arr.length ===0;
//   };
// console.log(validBraces("(" ))

// soluton2
// very long runtime due to while loop
// const validBraces = (braces) =>{
//   //braces.length % 2 === 0 even number of braces
//   if(braces.length % 2 !== 0) return false;

//   while(braces.includes('()') || braces.includes('{}') || braces.includes('[]'))
//   {  
//     braces.replace('()', '').replace('{}', '').replace('[]', '')
//   }  return braces === '';
// }


// right solution need to figure out 

let validBraces = (s) => {
  let objO  = {'(': 0, '[': 1, '{': 2};
  let objC  = {')': 0, ']': 1, '}': 2};
  let arr = [];

  for (let i=0; i<s.length; i++) {
    
      if (objO.hasOwnProperty(s[i])) {
       
          if (arr.length === 0 || arr[arr.length-1].idx !== objO[s[i]])
             { arr.push({idx: objO[s[i]], count: 1})
          
      }
          else
              arr[arr.length-1].count++;
      }
      else if (objC.hasOwnProperty(s[i])) {
          if (arr.length === 0 || arr[arr.length-1].idx !== objC[s[i]])
         { return false;}
          else {
              arr[arr.length-1].count--;
              if (arr[arr.length-1].count===0)
                  arr.pop();
          }
      }
  }
}
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//  The first word within the output should be capitalized
  // only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Example
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//figure out how to convert dash/underscore  to camelCasing in tne same time

// const toCamelCase = (str) => {
//   let string = ' ';
//   //when we use more than one separator we use regex as follow.
//   const strToArr = str.split(/[- _]+/);
//   const capStr =  strToArr.map((el) => 

//   el.charAt(0).toUpperCase() + el.slice(1)
// );
  
//   capStr.shift();
    
  
//   string = `${strToArr[0]}${capStr.join('')}`
//  console.log(string)
//  return string;
// }

// toCamelCase("the-stealth-warrior")
// toCamelCase('The_Stealth_Warrior');
// //solution 2
// function toCamelCase(str){
//   var regExp=/[-_]\w/ig;
//   return str.replace(regExp,function(match){
//         return match.charAt(1).toUpperCase();
//    });
// }
// solution 3
function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}
//////////////////////////////////////////////////////////////////////////////////
// kata 6
// Generate a valid randomly generated hexadecimal color string.
//  Assume all of them always have 6 digits.
//solution
// One byte represents a number in the range 00 to FF
//  (in hexadecimal notation), or 0 to 255 in decimal notation.
//  This represents the least (0) to the most (255) intensity of each of the color components.

// 
 
const hexaColorGen = ()=>{
    // storing all letter and digit combinations
    // for html color code
    let letters = "0123456789ABCDEF";
  
    // html color code starts with #
    let color = '#';
  
    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (let i = 0; i < 6; i++)
       color += letters[Math.floor(Math.random() * 16)];

return color;
};
console.log(
hexaColorGen());


/*// The toString () function for JavaScript numbers takes a radix parameter that defines the base of the numeral system.
//  In other words, num.toString (2) converts the number to a binary number string,
//  num.toString (10) converts the number to a base-10 string,
//  and num.toString (16) converts the number to a hexadecimal string.*/
/*
const hexaColorGen = ()=>{
  // random number to multiply with white color (Hex Code is 0xFFFFFF ),
  // let color = Math.floor( Math.random() * 0xFFFFFF );
  // console.log(color);
  // let result = '#' + color.toString(16);
  //REFACTORING
  return '#'+( Math.floor(Math.random() * 0xFFFFFF).toString(16))
  
}
*/
/*
console.log(
  hexaColorGen());
  // SOLUTON3
  const generateColor = () => '#' + Math.random().toString(16).substr(-6);
  generateColor();*/
  /////////////////////////////////////////////////////////////////////
  // KATA 7
//   The goal of Pig is to reach a total score of, say, 100, accumulated over multiple rounds by rolling a six-sided die.
//  The players take turns in playing and, in each round, a player rolls the die as many times they want summing up the results.
//  But, if they roll a 1, the score for that round is zero. The trick to the game is to know when to stop.

// Example: Say a player rolls a 5 and then a 6. If they stop, 11 points is the score for that round and is added to their total score.
//  If the player continues and rolls a 3 and then a 1, the score for the round is zero and nothing is added to their total score.


// The strategy that yields the maximum average score per round is to roll the die until 20 is reached (i.e., the score is 20 or above) 
// and then stop. However, if your opponent is ahead of you, you might want to play more aggressively, 
// and, if your opponent is way behind, you might choose to play more safely. 
// This adds another level of complexity, but we won't pursue that here. Let's just concentrate on the average score when playing "stop at n".

// The expected (or average) score per round when you play "stop at 20" is a little over 8. 
// This means that 20 is reached in approximately 4 out of 10 rounds on average.

// The goal of this kata is to write a function stop_at(m, n) which returns the expected score when rolling an m-sided die until n is reached.

// Input constraints:

// 2 <= m <= 12
// 1 <= n <= 100
// (To those who may object and say that there is no such thing as a 2- or 7-sided die: Here, a 2-sided die is a coin,
//  and a 7-sided die is a 7-sided pencil sharpened at both ends.)

// Output constraints:

// The result has to be within 1e-3 from the correct value
// Note that a Monte-Carlo simulation as shown in the Numberphile video converges very slowly 
// and is likely to either not provide a result that is sufficiently precise or time out.


///////////////////////////////////////////////////////////////////////////////////////////
// KATA8
// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.
//SOLUTION1
/*
const spinAddAy = (str) => {
  let punctuation = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  // console.log(punctuation.test('!'));
  const reverseStr = str.split(' ').map((el)=>
  {
    // whether a el is found in a string(punctuation)
    if(punctuation.test(el))
   return el
  else 
  return  el.slice(1) + el[0] + 'ay';
  }).join(' ');

  // console.log(reverseStr)
  return reverseStr
}
spinAddAy('Pig latin is cool');
spinAddAy('hello world !')*/

// solution2
/*
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
console.log(pigIt('Pig latin is cool'));
console.log(pigIt('hello world !'));
*/
// solution3
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
console.log(pigIt('Pig latin is cool'));
console.log(pigIt('hello world !'));