
let modeBtn = document.querySelector('#mode');
let currmode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click" , () =>{
    // console.log("you are trying to change mode");
    if (currmode == "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currmode)
})