//question1
var arr = ["red", "green", "yellow", "blue"];
arr.push("navy");
console.log(arr);
//question2
var arr = ["red", "green", "yellow", "blue"];
arr.pop();
console.log(arr);
//question3
var arr = ["red", "green", "yellow", "blue"];
arr.unshift("navy");
console.log(arr);
//question4
var arr = ["red", "green", "yellow", "blue"];
arr.shift();
console.log(arr);
//question5
var arr = ["where are you now?"];
var arr1 = arr.join(" ");
var arr2 = arr1.split(" ").reverse();
console.log(arr2);
//question6
var arr = ["red", "green", "yellow", "blue"];
indexofarr = arr.indexOf("yellow");
console.log(indexofarr);
//question7
var arr = ["red", "green", "yellow", "blue"];
checkElement = arr.includes("navy");
console.log(checkElement);
//question8
var arr = [50, 40, 20, 1000, 3000, 2500];
arr.sort((a, b) => a - b);
console.log(arr);
//question9
var arr = ["red", "green", "yellow", "blue"];
arrresult = arr.join(" ");
console.log(arrresult);
//Questions with Multiple Array Methods:
var arr = ["red", "green", "yellow", "blue"];
arr.push("pink");
arr.shift();
console.log(arr);
// question2;
var arr = ["where are you now?"];
var arr1 = arr.join(" ");
var arr2 = arr1.split(" ").reverse();
var arr3 = arr2.join(" ");
console.log(arr3);
//question3
var arr = [5, 2, 9, 1, 7, 6];
arr.sort();
arr.pop();
console.log(arr);
//question4
var arr = ["red", "green", "yellow", "blue"];
arr.unshift("navy");
arr.unshift("pink");
arr.shift("pink");
console.log(arr);
arrLen = arr.length;
console.log(arrLen);
//question5
var arr1 = ["red", "green", "yellow", "blue"];
var arr2 = ["apple", "watermelon", "orange"];
arrConcat = arr1.concat(arr2);
arrSort = arrConcat.sort();
arrSort.pop();
console.log(arrSort);
