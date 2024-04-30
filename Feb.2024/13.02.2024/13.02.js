// let yearNow=2024

// function ageCalc(birthYear){
//     return yearNow-birthYear
// }

// function pensioner(personName,birthYear){
//     const age=ageCalc(birthYear);

//     if(age<60){
//         let retires=60-age;
//         // return personName + " is " + age + " years old and he will be pensioneri in " + retires + "yaers"
//         return ` ${personName} is ${age} years old and he will be retired in ${retires} years`
//     }
//     else{
//         return `${personName} is ${age} and he is retired`
//     }
// }

// console.log(pensioner('Mamuka', 1947))


// function prof(persName, profession){
//     if(profession=='teacher'){
//         return `${persName} ასწავლის სპორტს ბავშვებს`
//     }
//     else if(profession=='driver'){
//         return `${persName} მართავს ავტობუსს`
//     }
//     else if(profession=='designer'){
//         return `${persName} ქმნის ვებ-გვერდის დიზაინს`
//     }
//     else{ return `${persName}-ს სამუშაო ადგილი უცნობია `}
// }

// console.log(prof('გერონტი','driver'))


const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
// const odd=arr.filter((item)=>item%2>0)
const odd=arr.filter((item)=>item%2===0)

console.log(odd)