const numbs=[3,1,7,2,8,4,6,5]
const numbs2=[3,1,7,2,8,4,6,5]
numbs.sort((a,b)=>a-b)
numbs2.sort((a,b)=>b-a)
console.log(numbs)
console.log(numbs2)

const data=[
    {id:4,name:"zoro",salary:500},
    {id:8,name:"mamuka",salary:630},
    {id:1,name:"imeda",salary:550},
    {id:5,name:"zoro",salary:700},
    {id:3,name:"zoia",salary:590},
    {id:4,name:"gela",salary:670}
]

// data.sort((a,b)=>{
//     return a.id - b.id
// })
data.sort((a,b)=>{
    return a.salary - b.salary
})
console.log(data)