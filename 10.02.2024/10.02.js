// let fName='Mamuka';
// let age=24;

// console.log(fName +' '+ age)

// let job, isMArried;

// job='Xadavshik';
// isMarried='true';

// console.log(fName + ' is a ' + age + ' years old ' + job + '.  Is he Married? ' + isMarried);


// let markMass= 70
// let markHeight= 1.78

// let johnMass=77
// let johnHeight= 1.82

// let markBmi= markMass/(markHeight**2)
// let johnBmi= johnMass/(johnHeight**2)

// console.log(markBmi)
// console.log(johnBmi)

// let q="Is mark's BMI higher than John's?"

// let bln= markBmi>johnBmi

// function greater(){
// if(markBmi>johnBmi){
//     return "Mark's BMI is greater than John's"
// }
// else{return "John's BMI is greater than mark's"}
// }
// markBmi>johnBmi? console.log("Mark's BMI is greater than John's"): console.log("John's BMI is greater than mark's");

// console.log(greater())


// let fName='Giorgi'
// let age=18

// if(age<13){
//     console.log(fName + ' is a boy')
// }
// else if(age>13 && age<20){
//     console.log(fName + ' is a teenager')
// }
// else if(age>20 && age<30){
//     console.log(fName + ' is a young man')
// }
// else if(age>30 && age<50){
//     console.log(fName + ' is a man')
// }
// else{console.log(fName + ' is an old man')}

const johnTeamScore = [109, 90, 116]
const michaelTeamScore = [118, 87, 110]
const maryTeamScore = [91, 131, 93]



let michaelTeamSum = 0
let maryTeamSum = 0



function sum(team) {
    let team = 0
    for (let i = 0; i < team.length; i++) {
        team += team[i]
    }
    return team
}

johnTeamAvg = johnTeamSum / johnTeamScore.length
console.log(johnTeamAvg)



// for (let i=0; i<johnTeamScore.length; i++){
//     johnTeamSum += johnTeamScore[i]
// }
// johnTeamAvg=johnTeamSum/johnTeamScore.length
// console.log(johnTeamAvg)



// for (let i=0; i<michaelTeamScore.length; i++){
//     michaelTeamSum += michaelTeamScore[i]
// }
// michaelTeamAvg=michaelTeamSum/michaelTeamScore.length
// console.log(michaelTeamAvg)



// for (let i=0; i<maryTeamScore.length; i++){
//     maryTeamSum += maryTeamScore[i]
// }
// maryTeamAvg=maryTeamSum/maryTeamScore.length
// console.log(maryTeamAvg)




if (johnTeamAvg > michaelTeamAvg && johnTeamAvg > maryTeamAvg) {
    console.log("Winner is John's team")
}
else if (michaelTeamAvg > johnTeamAvg && michaelTeamAvg > maryTeamAvg) {
    console.log("Winner is Michael's team")
}
else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > michaelTeamAvg) {
    console.log("Winner is Mary's team")
}
else { console.log('It\' a draw') }