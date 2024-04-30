// let a=15 - number
// let a='15 - string
// let a=true - boolean
// let a=false - boolean
// let a=undefined
// let a=null


// let a=15;
// let b=13;
// let bol=a+b
// console.log(bol)

// let born=1987;
// let now=2024;
// const age=now-born
// console.log(age)

// let fName='gela';
// let lName='gnolidze';
// let fullName=fName+' '+lName;
// console.log(fullName)

// fName='soso';
// lName='papaskiri';
// fullName=fName+' '+lName;
// console.log(fullName)


// function sum(a,b){
//     return a+b
// }

// function subs(a,b){
//     return a-b
// }

// function times(a,b){
//     return a*b
// }

// function divide(a,b){
//     if(b===0){
//         return 'second element can not equal zero';
//     }
//     else{
//         return a/b
//     }
// }


// let num1=divide(5,0)

// console.log(num1)

// let num2=divide(5,2)

// console.log(num2)

function test(C){
    if(C<15){
        return 'Wear a coat outside';
    }
    else if(C>=15 && C<=25){
        return 'Wear a jacket outside';
    }
    else{
        return 'You can wear just a t-shirt';
    }
}

console.log(test(7))