let ans = prompt("Enter your name !!");
let mybutton = document.querySelector("button");
const title = document.querySelector("h1");
mybutton.onclick = ()=>{

    if(title.textContent == `This is right bro click again`){
        
        title.textContent = `This is me ${ans}, you have to click bro`;
    }
    else{
        title.textContent = `This is right bro click again`;
    }
}

addEventListener("keypress",event);

function event(e){
    console.log(e.code);
}

