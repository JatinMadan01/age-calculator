//weekly test 
////----1---/////
// let originalString = "Hello, World!";
// let reversedString = reverseString(originalString);

// function reverseString(str) {
//   // Initialize an empty string to store the reversed result
//   let reversedStr = "";

//   // Iterate through each character in the original string
//   for (let i = str.length - 1; i >= 0; i--) {
//     // Append each character to the reversed string
//     reversedStr += str[i];
//   }

//   // Return the reversed string
//   return reversedStr;
// }
// console.log(reversedString);

/////----2----////

// let str = "anagram"; 
// let str1 = "nagaram";
// if(str.length !== str1.length){
//     console.log(false);
//     return;
// }
// let arr = new Array(26);
// for(let i = 0;i<26;i++){
//     arr[i] = 0;
// }
// for(let i = 0;i<str.length;i++){
//     arr[str[i].charCodeAt(0) - 97]++;
// }
// for(let i = 0;i<str1.length;i++){
//     arr[str1[i].charCodeAt(0) - 97]--;
// }
// for(let i = 0;i<26;i++){
//    if(arr[i] > 0 || arr[i] < 0){
//     console.log(false);
//     return;
//    }
// }
// console.log(true);

////-----3-----////

// let arr = [1,2,5,6,9];
// let arr1 = [1,5,6,8,7,5,5];
// let result = [];
// for(let i = 0;i<arr.length;i++){
//     if(arr1.includes(arr[i]) && !result.includes(arr[i])){
//         result.push(arr[i]);
//     }
// }

// console.log(result);

////----4----////

// let str = "abba";
// function palindrome(str){
//     let i = 0;
//     let j = str.length-1;
//     while(i<j){
//         if(str[i] !== str[j]){
//             return false
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// console.log(palindrome(str));

////----5----////

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
// let times = 6;
// function rotation( arr ,  times ,  start ,  end){
//   let  i =  start;
//   let j = end;
//   while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }
// rotation(arr,times , 0 , arr.length-times-1);
// rotation(arr,times , arr.length-times , arr.length-1);
// rotation(arr,times , 0 , arr.length-1);
// console.log(arr);

////----6----////

// let str = "aabcccccaaa";
// let result = "";
// function stringCompression(str) {
//     let count = 1;
//     result = result + str[0];
//     for(let i = 0;i<str.length-1;i++){
//         if(str[i] === str[i+1]){
//             count++;
//         }
//         else{
//             result = result + count;
//             result = result + str[i+1];
//             count = 1;
//         }
//     }

//     result = result+count;

//     return result;
// }

// console.log(stringCompression(str));

////----7----////

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9, 10];
// let target = 6;
// function array_sum(arr , target) {
//   let res = [];
//   let idx = 0;
//   for(let i = 0;i<arr.length;i++){
//     for (let j = i+1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === target){
//         res[idx]  = [];
//         res[idx][0] = arr[i];
//         res[idx][1] = arr[j];
//         idx++;
//       }    
//     }
//   }
//   return res;
// }
// console.log(array_sum(arr , target));

////----8----////

let str = "abcaaabcdebb";
let max  = 1;
for(let i = 0;i<str.length;i++){
  for(let j = i;j<str.length;j++){
    let str1= "";
    for(let k = i;k<=j;k++){
      if(!str1.includes(str[k])){
        str1  = str1 + str[k];
      }
      else{
        break;
      }
    }
    if(max < str1.length){
      max = str1.length;
    }
  }
}
console.log(max);
