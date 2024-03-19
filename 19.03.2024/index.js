// const h1=document.querySelector('h1')
// const start=document.querySelector('.start')
// const stop=document.querySelector('.stop')
// const h2=document.querySelector('h2')
// const start2=document.querySelector('.start2')
// const stop2=document.querySelector('.stop2')
// const ad=document.querySelector('.ad')
// const close=document.querySelector('.close')

// function addOne(){
//    let scnd=h1.innerText;
//    h1.innerText=+scnd+1
// }

// function addTwo(){
//     let scndTwo=h2.innerText;
//     h2.innerText=+scndTwo+2
// }

// setTimeout(showAd, 3000)

// close.addEventListener('click',()=>{
//     ad.classList.remove('active')
// })

// function showAd(){
//     ad.classList.add('active')
// }



// let interval;
// start.addEventListener('click',()=>{
//     interval=setInterval(addOne,1000)
// })
// stop.addEventListener('click',()=>{
//     if(interval){
//         clearInterval(interval)
//     }
// })

// start2.addEventListener('click',()=>{
//     interval=setInterval(addTwo,2000)
// })
// stop2.addEventListener('click',()=>{
//     if(interval){
//         clearInterval(interval)
//     }
// })

// const users=[]
// const tBody=document.querySelector('tbody')




// const user1={
//     firstName:"Zauri",
//     lastName:"Fofxadze",
//     address:"Rustavi"
// }

// const user2={
//     firstName:"Givi",
//     lastName:"Manjgava",
//     address:"Tskaltubo"
// }

// const user3={
//     firstName:"Mamuka",
//     lastName:"Gogoladze",
//     address:"Kaspi"
// }

// const user4={
//     firstName:"Soso",
//     lastName:"Chxeidze",
//     address:"Xaragauli"
// }

// const user5={
//     firstName:"Gela",
//     lastName:"Abramishvili",
//     address:"Baxmaro"
// }

// const user6={
//     firstName:"Zauri",
//     lastName:"Fofxadze",
//     address:"Tskaltubo"
// }

// const user7={
//     firstName:"Zauri",
//     lastName:"Fofxadze",
//     address:"Tskaltubo"
// }

// const user8={
//     firstName:"Zauri",
//     lastName:"Fofxadze",
//     address:"Tskaltubo"
// }

// const user9={
//     firstName:"Zauri",
//     lastName:"Fofxadze",
//     address:"Tskaltubo"
// }

// const user10={
//     firstName:"Zauri",
//     lastName:"Fofxadze",
//     address:"Tskaltubo"
// }


// function addUser(user){
//      users.push(user)
// }

// function saveUsers(array){
//     localStorage.setItem("users", JSON.stringify(array))
// }

// addUser(user1)
// addUser(user2)
// addUser(user3)

// saveUsers(users)

// function renderUsers(){
//     const users=JSON.parse(localStorage.getItem("users"))
//     tBody.innerHTML='';
//     users.forEach(user => {
//         tBody.innerHTML+=`
//          <tr>
//         <td>${user.firstName}</td>
//         <td>${user.lastName}</td>
//         <td>${user.address}</td>
//          </tr>`
//     })
// }

// renderUsers()

const numbers=[5,10,20,30,40,50,60,70,80]
function main(numbers, target) {
    let number1;
    let number2;
    let initArr = [...numbers]
     function getIndex(numbers, target) {
        number1 = numbers[0]
        if(numbers.length===0) return 'numbers not found';
        for (let i = 1; i < numbers.length; i++) {
            number2 = numbers[i]
            if (number1 + numbers[i] === target) {
                return [initArr.indexOf(number1), initArr.indexOf(number2)]
            }
        }
        numbers.shift();
       return getIndex(numbers,target);
    }
    return getIndex(numbers,target)
}

console.log(main(numbers,30))