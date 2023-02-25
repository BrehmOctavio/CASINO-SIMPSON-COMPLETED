//VARIABLES

const form = document.querySelector(".form");

//GET-DATA

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const {name} = e.target;
    localStorage.setItem("name",name.value);
    window.open("../html/main.html");
    window.close("../html/index.html");
});