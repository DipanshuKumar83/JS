const url="http://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

btn.addEventListener("click" , getFacts);

const getFacts=async() =>{
    console.log("getting data......");
    let response =await fetch(url);
    console.log(response);
    let dater =await response.json();
    factPara.innerText=data[0].text;
};