// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1

const numbers=[-5, -2, -6, 0, -1]
let largest = numbers[0];

function findLargest(arr){
for(let i=0; i<arr.length; i++){
    if(arr[i]> largest){
        largest = arr[i]
    }
}
return largest
}
console.log(findLargest(numbers))




// 2. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

const numbers2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
numbers2.forEach((element)=>{
    if(element%2==0){
        console.log(element+" is even")
    }
    else{
        console.log(element+" is odd")
    }
})




// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

const numbers3=[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]

numbers3.sort((a,b)=> a-b)
console.log(numbers3)




// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const arr1=[3,'a','a','a',2,3,4,9,3];
arr1.sort((a, b) => a - b); 
let count = 1, 
    max = 0, 
    el; 
  
for (let i = 1; i < arr1.length; ++i) { 
    if (arr1[i] === arr1[i - 1]) { 
        count++; 
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        el = arr1[i]; 
    } 
} 
console.log(el, `${max} times`)




// 10. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

const arrays=[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    }
    return product;
  }
  console.log(multiplyAll([['row0'],[1, 2, 1, 24],["row1"],[8, 11, 9, 4],["row2"],[7, 0, 7, 27],["row3"],[7, 4, 28, 14],["row4"],[3, 10, 26, 7]]))





// Write a JavaScript function to remove a specific element from an array.
// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

function removeItem(array, item){
    let index= array.indexOf(item);
    if(index !== item){
        array.splice(index, 1)
    }
    return array
}

console.log(removeItem([2, 5, 9, 6], 5))




// დაწერეთ ფუნქცია რომელიც ალერტით გამოიტანს ვინდოუს სიგანეს და სიმაღლეს

const width = window.innerWidth
const height = window.innerHeight

alert(`${width}, ${height}`)




// შექმენით ღილაკი რომლის ქლიქზე დარეფრეშდება ფეიჯი

const refresh = document.querySelector('button')
refresh.addEventListener('click', (e)=>{
    location.reload()
})