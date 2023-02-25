//variables

const body = document.querySelector(".body");
const title = document.querySelector(".title");
const allGames = document.querySelector(".all-games");
const welcome = document.querySelector(".welcome");
const toggleDark = document.querySelector(".toggle-dark");
const toggleLight = document.querySelector(".toggle-light");

//DARK-MODE

const darkModeFunction = ()=>{
    toggleLight.style.display = "block";
    toggleDark.style.display = "none";
    body.style.backgroundColor = "rgb(21, 21, 21)";
    title.style.color = "rgb(255, 255, 255)";
    welcome.style.color = "rgb(255, 255, 255)";
};

const lightModeFunction = ()=>{
    toggleLight.style.display = "none";
    toggleDark.style.display = "block";
    body.style.backgroundColor = "rgb(255, 255, 255)";
    title.style.color = "rgb(21, 21, 21)";
    welcome.style.color = "rgb(21, 21, 21)";
};

let darkMode = localStorage.getItem("dark-mode");

if(darkMode == "true"){
    darkModeFunction();
}else if(darkMode == "false"){
    lightModeFunction();
};

localStorage.setItem("dark-mode",true);

toggleDark.addEventListener("click",()=>{
    localStorage.setItem("dark-mode",true);
    darkModeFunction();
});

toggleLight.addEventListener("click",()=>{
    localStorage.setItem("dark-mode",false);
    lightModeFunction();
});

//NAME

let userName = localStorage.getItem("name");
welcome.textContent = `Welcome ${userName}`;

//DATA

const json = [
    {
        "id": 1,
        "img": "../assets/loteria.gif",
        "title": "LOTTERY"
    },
    {
        "id": 2,
        "img": "../assets/roulette.gif",
        "title": "ROULETTE"
    },  
    {
        "id": 3,
        "img": "../assets/slot.gif",
        "title": "SLOT MACHINE"
    }  
]

for(let item of json){
    allGames.innerHTML += `
        <div class="div-card">
            <img id=${item.id} class="image-card" src="${item.img}" alt="img-game"/>
            <p class="title-card">${item.title}</p>
        </div>
    `;
};

//ROUTES

allGames.addEventListener("click",(e)=>{
    if(e.target.id == 1){
        window.open("../html/lottery.html");
        window.close("../html/index.html");
    }else if(e.target.id == 2){
        window.open("../html/roulette.html");
        window.close("../html/index.html");
    }else if(e.target.id == 3){
        window.open("../html/slot.html");
        window.close("../html/index.html");
    }/*else if(e.target.id == 4){
        window.open("../html/lottery.html");
        window.close("../html/index.html");
    };*/
});



