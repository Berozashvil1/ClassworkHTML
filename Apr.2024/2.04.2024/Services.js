import{URL} from "./Keys.js";
import { HtmlElement } from "./DomeElements.js";

async function getData(endPoint){
  try{ const url=URL+endPoint;
    HtmlElement.loader.classList.add("active")
    const data=await fetch(url);
    const result=await data.json();
    HtmlElement.loader.classList.remove("active")
    return result}catch{
        console.log('catch')
    }
}


export async function getCurrencies(code){
    try{const endPoint= `latest/${code}`
    const res=await getData(endPoint);
    const result={
        base_code:res.base_code,
    rates:res.conversion_rates
    }
    return result}catch{
        console.log("catch")
    }
}


export async function getSupported(){
    const endPoint= `codes`
    const result=await getData(endPoint);
    return result.supported_codes
}


export function renderOptions(supportedCodesArray,currency1,currency2) {
    supportedCodesArray.forEach(code => {
        HtmlElement.select_1.innerHTML +=`
        <option ${code[0]==currency1 ? "selected":""} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `;
        HtmlElement.select_2.innerHTML +=`
        <option ${code[0]==currency2 ? "selected":""} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `;
    });
}
