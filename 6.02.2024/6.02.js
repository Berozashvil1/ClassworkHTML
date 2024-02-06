
// const cars=['porsche', 'fiat', 'bmw']

// cars[3]='audi'
// cars.push('opel')
// cars.push('mercedes')
// cars.pop();
// cars.shift()
// cars.push('ferrari')
// cars.unshift('tesla')


// console.log(cars[1])
// console.log(cars)

// const cities=['New-York', 'Stockholm', 'Havana','Tbilisi']

// console.log(cities)


// cities.push('Atlanta')
// cities.push('Tokyo')
// cities.push('Delhi')

// console.log(cities)


// cities.unshift('Paris')
// cities.unshift('Mexico City')
// cities.unshift('Kutaisi')

// console.log(cities)


// cities.pop()
// cities.pop()
// cities.pop()

// console.log(cities)


// cities.shift()
// cities.shift()
// cities.shift()

// console.log(cities)


// const numbers=['number-1', 'number-2', 'number-3', 'number-4']

// console.log(numbers)

// console.log(numbers.length)
// // numbers.pop()
// // numbers.push('number-1')
// // numbers.shift()
// // numbers.unshift('number-4')
// const first=numbers[0]
// console.log(first)
// const last=numbers[numbers.length-1]
// console.log(last)
// numbers[0]=last
// numbers[numbers.length-1]=first

// console.log(numbers)


// const products=['product1', 'product2', 'product3', 'product4', 'product5',  'product6']

// console.log(products)

// const first=products[0]
// const last=products[products.length-1]

// products[0]=last
// products[products.length-1]=first

// console.log(products)


// const numbers=['number1', 'number2', 'number3', 'number4']

// console.log(numbers)

// console.log(lastNumber(numbers))

// function lastNumber(a){
//     const last=numbers.length-1
//     return last
// }

// const numbers=['number1', 'number2', 'number3', 'number4']

// console.log(numbers)



// function array(a){
//     if(Array.isArray=true){
//         const last=numbers.length-1
//         return last
//     }
//     else{
//         return 'Parameter needs to be Array'
//     }

// }

// console.log(array(numbers))


// const numbers=['number1', 'number2', 'number3', 'number4']
// const arr=['sum', 'num', 'rum', 'mum']
// console.log([...numbers,...arr])
// console.log(numbers.concat(arr))
// console.log(numbers.toString())
// console.log(numbers.join(";"))


// const movies=['Interstelar', 'Oppenheimer', 'The Truman Show']
// console.log(movies)

// const cartoons=['Coco', 'Cars', 'Puss in Boots']
// console.log(cartoons)

// const series=['Supernatural', 'The Boys', 'The Walking Dead']
// console.log(series)

// const cinema=movies.concat(cartoons,series).join("-")

// console.log(cinema)


// const fruits=['apple', 'banana', 'pear', 'orange', 'lemon']
// console.log(fruits)

// function cutout(arr,start,qnt){
//     const copyArray=[...arr];

//     const result=copyArray.splice(start,qnt);
//     return result
// }

// console.log(cutout(fruits,2,2))
// console.log(fruits)


const num=['1', '2', '3', '4', '5', '6']
console.log(num)

console.log(num.slice(1,3))
console.log(num)




const numb=['10', '20', '30', '40', '50', '60']
console.log(numb)

console.log(numb.splice(1,2))
console.log(numb)