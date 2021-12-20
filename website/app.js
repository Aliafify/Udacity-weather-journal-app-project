/* Global Variables */

//const { response } = require("express");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = +d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();
const generate=document.querySelector("#generate");

generate.addEventListener('click',async()=>{
const apiKey="cf98f5886186cf02ab13a0c93244b7b2";
const zipCode=document.querySelector("#zip").value;
const feelings=document.querySelector("#feelings").value;
try{
const getOfLink= await fetch("https://api.openweathermap.org/data/2.5/weather?zip="+zipCode+"&appid="+apiKey+"&units=metric");
const data= await getOfLink.json();
const temp =data.main.temp;
const object={
    newDate,
    temp,
    feelings
}
const pp= await fetch("/add",{
     method:"post",
     credentials:"same-origin",
     headers: {
         "Content-Type": "application/json",
     },
     body:JSON.stringify(object)
 });
 //console.log(pp);
  let getDataOfServer= await fetch("/getRout",{method:"get",credentials:"same-origin","Content-Type": "application/json"});
  const finalData= await getDataOfServer.json();
  const myData=JSON.stringify(finalData)
  //console.log(finalData.temp);
  document.getElementById("temp").innerHTML="Temperatur = "+ finalData.temp;
  document.getElementById("date").innerHTML="Date = "+ finalData.newDate;
  document.getElementById("content").innerHTML="Feeling = "+ finalData.feelings;


}catch(error){
    console.log(error+'error')
}

});
