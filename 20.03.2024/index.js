

// function stringChop(str,num){
//     if(!num||num<=0)return[str];
//     const res=[];
//     for(let i=0;i<str.length;i+=num){
//         const slice=str.slice(i,i+num)
//         res.push(slice);
//     }
//         return res
// }

// console.log(stringChop("JustSomeString",3))
// console.log(stringChop("JustSomeString",2))
// console.log(stringChop("JustSomeString"))

// function count(string,pattern){
//     const regExp=new RegExp(pattern,"gi")
//     const arr=string.match(regExp);
//     return arr.length
// }

// console.log(count("The quick brown fox jump over the lazy dog" , "the"))


// function cropStr(string,num=null,end="..."){
//     if(!num && num!==0 || num<0) return string;
//     const res=string.slice(0,num);
//     return res.length==string.length?string : res+end;
// }

// console.log(cropStr("we are doing JS string exercises"))
// console.log(cropStr("we are doing JS string exercises",19))
// console.log(cropStr("we are doing JS string exercises",15,"!!"))


function reverse(str){
    return (str === "")? "": reverse(str.slice(1)) + str.charAt(0);
}
console.log(reverse('something'))