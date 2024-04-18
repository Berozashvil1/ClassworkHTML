// const arr1=['codewars', 'flick', 'code', 'wars'];
// const arr2=['flick', 'chocolate', 'adventure', 'sunshine'];
// const arr3=['bicycle', 'jarmony', 'flick', 'sheep', 'flick'];

// const bool=true;




//     function flickSwitch(arr) {
//         let bool = true;
//         return arr.map((item) => {
//           if (item === "flick"){
//             bool = !bool;
//           }
//           return bool;
//         });
//       }

//       console.log(flickSwitch(arr1));
//       console.log(flickSwitch(arr2));
//       console.log(flickSwitch(arr3));


// function test(arr){
//     let controller =true;
//     const res=[];
//     arr.forEach(el => {
//         if(el==="flick")controller=!controller;
//         res.push(controller)
//     });
//     console.log()
// }


function checkCharCase(a, b) {
    if (a.toLowerCase == a.toUpperCase || b.toLowerCase == b.toUpperCase) {
        return -1
    }
    return Number((a.toUpperCase() === a) === (b.toUpperCase() === b))
}
console.log(checkCharCase("f", "?"))
