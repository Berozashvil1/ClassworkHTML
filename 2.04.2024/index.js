import { getCurrencies, getSupported, renderOptions } from "./Services.js";
import { HtmlElement } from "./DomeElements.js";

let rate = 0;
let code1 = '';
let code2 = '';



async function init() {
    const supportedCodes = await getSupported();
    const currencies = await getCurrencies("GEL");
    renderOptions(supportedCodes);
    code1 = currencies.base_code;
    code2 = HtmlElement.select_2.value;
    rate = currencies.rates[code2];
    console.log(rate)
    HtmlElement.amount_2.value = rate * 1
}

init()

HtmlElement.select_1.addEventListener("change", async (e) => {
    const code = e.target.value;
    const data = await getCurrencies(code);
    code2 = HtmlElement.select_2.value;
    code1 = data.base_code;
    rate = data.rates[code2];
    HtmlElement.amount_2.value = rate * HtmlElement.amount_1.value
    code2 = HtmlElement.select_2.value;
    console.log(rate);
})

convert.addEventListener("click", (e)=>{
    
})