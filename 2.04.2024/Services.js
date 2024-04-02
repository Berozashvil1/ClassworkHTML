import{URL} from "./Keys.js";
import { HtmlElement } from "./DomeElements.js";

async function getData(endPoint){
    const url=URL+endPoint;
    const data=await fetch(url);
    const result=await data.json();
    return result
}


export async function getCurrencies(code){
    const endPoint= `latest/${code}`
    const res=await getData(endPoint);
    const result={
        base_code:res.base_code,
    rates:res.conversion_rates
    }
    return result
}


export async function getSupported(){
    const endPoint= `codes`
    const result=await getData(endPoint);
    return result.supported_codes
}


export function renderOptions(arr) {
    arr.forEach(code => {
        HtmlElement.select_1.innerHTML +=`
        <option ${code[0]=="GEL"? "selected":""} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `;
        HtmlElement.select_2.innerHTML +=`
        <option value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `;
    });
}
