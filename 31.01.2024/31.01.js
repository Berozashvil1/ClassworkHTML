
// let x=20
// let y=15
// // x=x+y
// x+=y
// console.log(x)


// let a=8
// let b=10
// // x=x-y
// a-=b
// console.log(a)


// let c=12
// let d=15
// // x=x*y
// c*=d
// console.log(c)


// let e=25
// let f=33
// // x=x/y
// e/=f
// console.log(e)


// let g=14
// let h=11
// // x=x%y
// g%=h
// console.log(g)


// let i=6
// let j=3
// // x=x**2
// i**=2
// console.log(i)




// function more(a,b){
//     if(a>b){
//         return a
//     }
//     else if(a<b){
//         return b
//     }
// }
// console.log(more(25,23))

// function even(a){
//    let res=a%2
//    if(res>0){
//     return false
//    }
//    else{
//     return true
//    }
// }
// console.log(even(8))


// function square(a){
//     return a**2
// }
// console.log(square(12))



// function higher(a,b,c){
//     if(a>(b,c)){
//         return a
//     }
//     else if(b>(a,c)){
//         return b
//     }
//     else if(c>(a,b)){
//         return c
//     }
// }
// console.log(higher(7,8,9)) 


// function buy(a,b){
//     if(a>b){
//         return 'თანხა არ არის საკმარისი'
//     }
//     let change=b%a; 
//     if(change==0){
//         let quantity=b/a;
//         return 'თქვენ შეიძინეთ' + quantity + 'ნივთი'
//     }
//     else{
//         b=b-change
//         let quantity=b/a
//         return 'თქვენ შეიძინეთ' + quantity + 'ნივთი და ხურდა გეკუთვნით' + change + 'ლარი'
//     } 
// }
// console.log(buy(5,7))
// console.log(buy(3,9))
// console.log(buy(7,6))


// function hello(){
//     let name ='hello world'
//     return name
// }
// console.log(hello())

// function hello(name){
//     return 'hello' +' '+ name 
// }
// console.log(hello('giorgi'))

let num=0;
function add(){
    num=num+1
    return num
}
console.log(add())
console.log(add())
console.log(add())
console.log(add())


