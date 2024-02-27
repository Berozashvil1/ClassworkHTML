// let string="dsjfa. hha.dhf fbvub.df bfhdb"

// let lgth= string.length
// let char= string.charAt(14)
// let charCode= string.charCodeAt(5)
// let slice= string.slice(4,18)
// let rpt= string.repeat(3)
// let rplc= string.replace("a","z")
// let rplcAll= string.replaceAll("a","z")
// const splt= string.split(".")




// console.log(lgth)
// console.log(char)
// console.log(charCode)
// console.log(slice)
// console.log(rpt)
// console.log(rplc)
// console.log(rplcAll)
// console.log(splt)

// function strng(str){
//     return typeof str==='string'
// }
// console.log(strng([2,3,4,5,5]))


// const isBlank=function(str){
//     if(typeof str!='string'){
//         throw new Error('parameter must be a string')
//     }
//     return str.length===0
// }
// console.log(isBlank(13))


// const text=(str,num)=>{
//     return str.slice(0,num)
// }
// console.log(text('dhsihfuegfg',5))



// const text="Robin Singh wfgd dgdfgg sgsg"
// function  abbrevName(str){
//     const arr=str.split(' ')
//     const first=arr[0]
//     const scnd=arr[1].slice(0,1)+'.'
//     return `${first} ${scnd}`
// }
// console.log(abbrevName(text))


// const mail='giorgi_berozashvili@gmail.com'
// const protectEmail=(email)=>{
//     const indexFirst=email.indexOf("_")
//     const indexScnd=email.indexOf("@")
//     const deleted=email.slice(indexFirst,indexScnd)

//     return mail.replace(deleted,"...")
// }
// console.log(protectEmail(mail))


// const text="Robin Singh From USA.";
// function stringParametrize(str){
//     const res=str.split(' ').map(el=>el.toLowerCase()).join('-')
//     return res.endsWith('.')?res.slice(0,res.length-1):res;
// }
// console.log(stringParametrize(text))


// const text="Robin Singh From USA";

// function test(str){
//     return str.replace(str[0],str[0].toUpperCase())
// }

// console.log(test(text))

// const text="robin singh from USA";

// function test(str){
//     return str.split(' ').map(el=>el.replace(el[0],el[0].toUpperCase())).join(' ')
// }

// console.log(test(text))


const text="Robin Singh From USA";

function test(str){
    let res='';
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char.toUpperCase()===char){
            res+=char.toLowerCase();
        }
        else{
            res+=char.toUpperCase();
        }
    }
    return res
}

console.log(test(text))