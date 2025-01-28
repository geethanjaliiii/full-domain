// function isPalindrome(str) {
//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     if (str[i] != str[j]) {
//       return false;
//     } else {
//       i++;
//       j--;
//     }
//     return true;
//   }
// }

// console.log(isPalindrome("madam")); // Output: true
// console.log(isPalindrome("hello")); // Output: false

// //***********second largest************* */
// function findLargest(arr) {
//   return arr.reduce(
//     (acc, curr) => {
//       if (curr > acc.lar) {
//         acc.sec = acc.lar;
//         acc.lar = curr;
//       } else if (curr < acc.lar && curr > acc.sec) {
//         acc.sec = curr;
//       }
//       return acc;
//     },
//     { lar: -Infinity, sec: -Infinity }
//   ).sec;
// }

// console.log(findLargest([2, 8, 3, 10, 4])); // Output: 10


// function isPrime(num) {
   
//     for(let i=2;i<num/2;i++){
//         if(num%i==0){
//            return false
//         }
//     }
//     return true
//   }
  
//   console.log(isPrime(17)); // Output: true
//   console.log(isPrime(10)); // Output: false

//   function findIntersection(arr1, arr2) {
//     // Your logic here
//     let res=[]
//     for(let num of [...new Set(arr1)]){
//         if(arr2.includes(num)){
//             res.push(num)
//         }
//     }
//     return res
//   }
  
//   console.log(findIntersection([1, 2,2, 3], [2, 3, 4])); // Output: [2, 3]
  
//   function groupAnagrams(words) {
//     // Your logic here
//     let map=new Map()
// for(let word of words){
//   let key=word.split("").sort().join("")
//   if(!map.has(key)){
//     map.set(key,[])
//   }
//   map.get(key).push(word)
// }
// return Array.from(map.values())
//   }
  
//   console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//   // Output: [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]

//   function longestWord(sentence) {

// let freq=[]
// let longest='';
// let maxLength=0
// for(let word of sentence.split(' ')){
//   if(word.length>maxLength){
//     longest=word;
//     maxLength=word.length
//   }
// }
// return longest

//     // let count={}
//     // for(let word of sentence.split(' ')){
//     //   if(!count[word]){
//     //     count[word]=word.length
//     //   }
//     // }
//     // let long=0
//     // for(let c in count){
//     //     if(count[c]>long){
//     //       long=count[c]
//     //     }
//     // }
//     // return long
//   }
  
//   console.log(longestWord("The quick brownnnn fox jumps over the lazy dog")); 

//   function fibonacciSeries(n) {
//     // Your logic here
//     let fib=[0,1]
//     for(let i=2;i<n;i++){
//       fib[i]=fib[i-1]+fib[i-2]
//     }
//    return fib
//     // f(4)+f(3)=>f(3)+f()
//   }
  
//   console.log(fibonacciSeries(6)); // Output: [0, 1, 1, 2, 3, 5]

//   function findMissingNumber(arr, n) {
//     for(let i=0;i<arr.length;i++){
//     if(arr[i]!=i+1){
//       return i+1
//     }
//     }
//   }
  
//   console.log(findMissingNumber([1, 2, 3, 5], 5)); // Output: 4
  
//   obj={a:10,b:5,c:9}
//   let kk=Object.fromEntries(Object.entries(obj).sort((a,b)=>a[1]-b[1]))
//   console.log(kk);
  
  function halo(...args){
    console.log()
}
const array=[1,2,3,3,4]
halo('array',array,1,'kk')