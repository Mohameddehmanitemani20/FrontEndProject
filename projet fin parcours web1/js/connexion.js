let txtuser= document.querySelector(".txtuser");
let txtpass= document.querySelector(".txtpass");
let submit= document.querySelector(".submit");


if (window.localStorage){
//console.log("supported!")

//store value using key and pairs
localStorage.setItem("user","dahmoun");
localStorage.setItem("pass","esprit20");


let user=localStorage.getItem("user");
let pass=localStorage.getItem("pass");

let message=document.querySelector(".message");

submit.addEventListener("click",()=>{
    if(user==txtuser.value && pass==txtpass.value){
        message.innerHTML="login successfull halla maak...";
        window.location.href="../html/principale.html"
    }else{
        message.innerHTML="Username or Password Is Invalid nchlh marra jayya";
    }
});
}else{
    console.log("not supported!")
}