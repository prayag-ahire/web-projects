const myhanding = document.querySelector("h1");
myhanding.textContent = "Hello world";
/*
let prayag = "ahire";
console.log(prayag);
prayag = "flash";
if(prayag=='flash'){
    alert("hi this is a joke");
    multiply(5,2);
}

function multiply(num1,num2){
    let result = num1 * num2;
    alert(result);
}

let  mainpage = document.querySelector("html");
mainpage.addEventListener("click",() => alert("you are annoying"));
*/
let myImg =  document.querySelector("img");

myImg.onclick = () => {
    const mysrc = myImg.getAttribute("src");
    if(mysrc === "https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720"){
        myImg.setAttribute("src","https://www.comingsoon.net/wp-content/uploads/sites/3/2023/09/Solo-Leveling.jpg");
    }
    else{
        myImg.setAttribute("src","https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720");
    }
}

// document.querySelector("img").addEventListener("click", ()=> alert("img change"));

let myButton = document.querySelector("button");
let myHanding = document.querySelector("h1");

let myName;
function setUserName(){
    myName = prompt("Enter your name.");
    console.log(myName);
    if(!myName){
        setUserName();
    }
    else{
    localStorage.setItem("name",myName);
    myHanding.textContent = `Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName =localStorage.getItem("name");
    myHanding.textContent = `mozilla is cool ${storedName}`;
}

myButton.onclick = () =>{
setUserName();
}

document.addEventListener("DOMContentLoaded",()=>{
function paragraph(){
    const para = document.createElement("p");
    para.textContent = `hello ${myName} thank you for providing your name.`
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");
for(const button of buttons){
    button.addEventListener("click",paragraph);
}
});