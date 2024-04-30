

const weight=document.querySelector("#weight")
const height=document.querySelector("#height")
const btn=document.querySelector("#btn")
const resCont=document.querySelector('#result')
// BMI=weight(KG)/height*height(M)

btn.addEventListener('click', ()=>{
    const kg=weight.value;
    const meter=height.value/100;
    if(kg<=0||meter<=0){
        window.alert('You must fill weight and height properly')
    }
    const BMI=Math.round(kg/meter**2)
    if(BMI<19){
        resCont.innerHTML=`Your BMI is ${BMI} and it means you're skinny`
        resCont.style='color:red'
    }
    else if(BMI>19,BMI<22){
        resCont.innerHTML=`Your BMI is ${BMI} and it means you're underweight`
        resCont.style='color:green'
    }
    else if(BMI>=22, BMI<25){
        resCont.innerHTML=`Your BMI is ${BMI} and it means you're overweight`
        resCont.style='color:green'
    }
    else if(BMI>=25){
        resCont.innerHTML=`Your BMI is ${BMI} and it means you're obese`
        resCont.style='color:red'
    }
}
)