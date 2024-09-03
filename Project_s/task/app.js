const BASE_URL = 
     "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"



const dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns)  {
    for(currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innertext = currcode;
        newOption.value = currcode;
    }
};

for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }   
select.addEventListener("change", (evt) => {
    updateFlag(Evt.target);
});

}

// const updateflag = (element) => {
//     let currCode = element.value;
//     let currCide = countryList[currcode];
//     let newSrc = "https://flagsapi.com/${contarycode}/flat/64.png" ;
//     let img = element.parentElement.querySelector("img");
// };

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurrValue}/${toCurrValue}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
  
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} =  ${finalAmount}${toCurr.value} ${finalAmount}`;
  };
  
  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = "https://flagsapi.com/${currCode}flat/64.png";
    let img = element.parentElement.querySelector("img");
     img.src = newSrc;
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    btn.addEventListener("click", async (evt) => {
        // Your code here
    updateExchangeRate();
    });
  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });