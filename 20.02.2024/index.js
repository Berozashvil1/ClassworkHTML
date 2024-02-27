// const input = [1, 2, 3, 4, 5];

// function squared(num){
//     return input.map(item => item **(num))
// }
// console.log(squared(3))




// const input = [1, -4, 12, 0, -3, 29, -150];
// const greatZero=input.filter(num=>num>0)

// function sum(acum,item){
//     return greatZero.reduce((acum,item) => acum+item)
// }
// console.log(sum())



// const input = [
//     {
//       name: "John",
//       age: 13,
//     },
//     {
//       name: "Mark",
//       age: 56,
//     },
//     {
//       name: "Rachel",
//       age: 45,
//     },
//     {
//       name: "Nate",
//       age: 67,
//     },
//     {
//       name: "Jennifer",
//       age: 65,
//     },
//   ];

//   const age= input.map((person) => person.age)
//     const minAge = Math.min(...age)
//     const maxAge = Math.max(...age)
//     const difference = maxAge-minAge
//     const final = [minAge, maxAge, maxAge-minAge]
//     // const final = [Math.min(...age),Math.max(...age), Math.max(...age)-Math.min(...age)]


// console.log(minAge)
// console.log(maxAge)
// console.log(difference)
// console.log(final) 

const products = [
    { name: "Product 1", price: 40, category: "Electronics" },
    { name: "Product 2", price: 35, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 50, category: "Clothes" },
    { name: "Product 6", price: 85, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 75, category: "Electronics" },
  ];

  function getData(productsArray){
    const res= productsArray.reduce((acum,item) => {
        let key=item.category;
        if(acum[key]){
            acum[key].push(item.price)
            return acum
        }
        else{
            acum[key]=[item.price];
            return acum
        }
    },{})
  }